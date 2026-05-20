/* ===== 用户认证 ===== */
const Auth = {
  async check() {
    try {
      const res = await fetch('/api/check');
      const data = await res.json();
      if (data.ok) {
        document.getElementById('userEmail').textContent = data.email;
        return true;
      }
    } catch(e) {}
    // Not logged in - redirect to login
    window.location.href = '/login';
    return false;
  },

  async logout() {
    try {
      await fetch('/api/logout', { method: 'POST' });
    } catch(e) {}
    window.location.href = '/login';
  }
};

// Auto-check session on page load
document.addEventListener('DOMContentLoaded', () => {
  Auth.check();
  document.getElementById('logoutBtn').addEventListener('click', () => Auth.logout());
});
