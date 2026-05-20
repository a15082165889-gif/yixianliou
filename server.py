from flask import Flask, render_template, request, redirect, url_for, session, send_from_directory, jsonify
import sqlite3
import os
import hashlib
import uuid

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', os.urandom(24).hex())

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, 'users.db')

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    conn.execute('''CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )''')
    conn.commit()
    conn.close()

init_db()

def hash_password(password):
    salt = hashlib.sha256(os.urandom(32)).hexdigest()[:16]
    return salt + ':' + hashlib.sha256((salt + password).encode()).hexdigest()

def check_password(password, hashed):
    salt, h = hashed.split(':')
    return h == hashlib.sha256((salt + password).encode()).hexdigest()

@app.route('/')
def index():
    if 'user_id' not in session:
        return redirect(url_for('login_page'))
    return send_from_directory(BASE_DIR, 'index.html')

# Serve static files (CSS, JS, etc.)
@app.route('/<path:path>')
def static_files(path):
    # Public assets: allow CSS/JS files needed for login/register pages
    public_extensions = ['.css', '.js', '.json', '.png', '.jpg', '.gif', '.ico', '.svg']
    is_public_asset = any(path.endswith(ext) for ext in public_extensions)

    if any(path.endswith(ext) for ext in ['.html']):
        # HTML files require authentication
        if 'user_id' not in session:
            return redirect(url_for('login_page'))
        return send_from_directory(BASE_DIR, path)

    # Public assets can be accessed without login
    if is_public_asset:
        return send_from_directory(BASE_DIR, path)

    if 'user_id' not in session:
        return redirect(url_for('login_page'))
    return send_from_directory(BASE_DIR, path)

# Auth pages
@app.route('/login', endpoint='login_page')
def login_page():
    if 'user_id' in session:
        return redirect(url_for('index'))
    return render_template('login.html')

@app.route('/register', endpoint='register_page')
def register_page():
    if 'user_id' in session:
        return redirect(url_for('index'))
    return render_template('register.html')

# Auth API
@app.route('/api/register', methods=['POST'])
def api_register():
    data = request.get_json()
    email = data.get('email', '').strip().lower()
    password = data.get('password', '')
    confirm = data.get('confirm', '')

    if not email or '@' not in email or '.' not in email:
        return jsonify({'ok': False, 'msg': '请输入有效的邮箱地址'})

    if len(password) < 6:
        return jsonify({'ok': False, 'msg': '密码长度至少6位'})

    if password != confirm:
        return jsonify({'ok': False, 'msg': '两次输入的密码不一致'})

    conn = get_db()
    existing = conn.execute('SELECT id FROM users WHERE email = ?', (email,)).fetchone()
    if existing:
        conn.close()
        return jsonify({'ok': False, 'msg': '该邮箱已被注册'})

    hashed = hash_password(password)
    try:
        conn.execute('INSERT INTO users (email, password) VALUES (?, ?)', (email, hashed))
        conn.commit()
        user = conn.execute('SELECT id FROM users WHERE email = ?', (email,)).fetchone()
        session['user_id'] = user['id']
        session['email'] = email
        conn.close()
        return jsonify({'ok': True, 'msg': '注册成功'})
    except Exception as e:
        conn.close()
        return jsonify({'ok': False, 'msg': '注册失败，请稍后重试'})

@app.route('/api/login', methods=['POST'])
def api_login():
    data = request.get_json()
    email = data.get('email', '').strip().lower()
    password = data.get('password', '')

    if not email or not password:
        return jsonify({'ok': False, 'msg': '请填写邮箱和密码'})

    conn = get_db()
    user = conn.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone()
    conn.close()

    if not user or not check_password(password, user['password']):
        return jsonify({'ok': False, 'msg': '邮箱或密码错误'})

    session['user_id'] = user['id']
    session['email'] = email
    return jsonify({'ok': True, 'msg': '登录成功'})

@app.route('/api/logout', methods=['POST'])
def api_logout():
    session.clear()
    return jsonify({'ok': True, 'msg': '已退出登录'})

@app.route('/api/check')
def api_check():
    if 'user_id' in session:
        return jsonify({'ok': True, 'email': session.get('email', '')})
    return jsonify({'ok': False}), 401

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
