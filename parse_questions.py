# -*- coding: utf-8 -*-
import re, json

with open(r'C:\Users\Lenovo\.claude\projects\C--Users-Lenovo\f4770504-c5ed-4b45-bfce-9797345a1a22\tool-results\b0850ojml.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Split into question blocks
# Each block starts with a number followed by period
blocks = re.split(r'(?=^\d+\.)', text, flags=re.MULTILINE)

questions = []
for block in blocks:
    block = block.strip()
    if not block or len(block) < 10:
        continue
    
    # Determine type
    type_match = re.search(r'题型[：:](.+)', block)
    if not type_match:
        continue
    qtype = type_match.group(1).strip()
    
    # Extract question number
    num_match = re.match(r'(\d+)\.', block)
    qnum = int(num_match.group(1)) if num_match else 0
    
    # Extract answer
    ans_match = re.search(r'答案[：:]\s*([一-鿿\w\s,，、]+?)(?:\d|题型|$)', block)
    if not ans_match:
        ans_match = re.search(r'答案[：:]\s*([A-E\s]+?)\s*(?:\n|$)', block)
    answer = ans_match.group(1).strip() if ans_match else ''
    
    if qtype == '单项选择题':
        # Parse question stem
        stem_match = re.match(r'\d+\.(.+?)(?=A[.、])', block, re.DOTALL)
        stem = stem_match.group(1).strip() if stem_match else ''
        
        # Parse options
        opts = {}
        for letter in ['A', 'B', 'C', 'D', 'E']:
            opt_match = re.search(rf'{letter}[.、](.+?)(?=[A-Z][.、]|\n答案|\n题型)', block, re.DOTALL)
            if opt_match:
                opts[letter] = opt_match.group(1).strip()
        
        questions.append({
            'id': f'single_{qnum}',
            'type': 'single',
            'num': qnum,
            'stem': stem,
            'options': opts,
            'answer': answer.strip()
        })
        
    elif qtype == '多项选择题':
        stem_match = re.match(r'\d+\.(.+?)(?=A[.、])', block, re.DOTALL)
        stem = stem_match.group(1).strip() if stem_match else ''
        
        opts = {}
        for letter in ['A', 'B', 'C', 'D', 'E']:
            opt_match = re.search(rf'{letter}[.、](.+?)(?=[A-Z][.、]|\n答案|\n题型)', block, re.DOTALL)
            if opt_match:
                opts[letter] = opt_match.group(1).strip()
        
        questions.append({
            'id': f'multi_{qnum}',
            'type': 'multi',
            'num': qnum,
            'stem': stem,
            'options': opts,
            'answer': answer.strip()
        })
        
    elif qtype == '填空题':
        # Fill in blanks
        stem_match = re.match(r'\d+\.\s*(.+?)(?=\n答案)', block, re.DOTALL)
        stem = stem_match.group(1).strip() if stem_match else ''
        
        questions.append({
            'id': f'fill_{qnum}',
            'type': 'fill',
            'num': qnum,
            'stem': stem,
            'answer': answer.strip()
        })
        
    elif qtype == '简答题':
        stem_match = re.match(r'\d+\.\s*(.+?)(?=\n答案)', block, re.DOTALL)
        stem = stem_match.group(1).strip() if stem_match else ''
        
        questions.append({
            'id': f'short_{qnum}',
            'type': 'short',
            'num': qnum,
            'stem': stem,
            'answer': answer.strip()
        })

# Output as JS
print(f'// Total parsed: {len(questions)} questions')
print(f'// Single: {sum(1 for q in questions if q["type"]=="single")}')
print(f'// Multi: {sum(1 for q in questions if q["type"]=="multi")}')
print(f'// Fill: {sum(1 for q in questions if q["type"]=="fill")}')
print(f'// Short: {sum(1 for q in questions if q["type"]=="short")}')

# Show first few to verify
for q in questions[:5]:
    print(f'\n--- {q["type"]} #{q["num"]} ---')
    print(f'Stem: {q["stem"][:100]}')
    if 'options' in q and q['options']:
        for k,v in q['options'].items():
            print(f'  {k}. {v[:50]}')
    print(f'Answer: {q["answer"][:100]}')

# Output JSON
with open('C:/Users/Lenovo/diagnostics-review/questions_data.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)
print('\nJSON saved!')
