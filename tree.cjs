// tree.cjs
const fs = require('fs');
const path = require('path');

const ignore = ['node_modules', '.next', '.git', 'tree.txt'];

function generateTree(dir, prefix = '') {
  const items = fs.readdirSync(dir).filter(item => !ignore.includes(item));
  const entries = items.map((item, index) => {
    const fullPath = path.join(dir, item);
    const isLast = index === items.length - 1;
    const branch = isLast ? '└── ' : '├── ';
    const spacer = isLast ? '    ' : '│   ';
    if (fs.statSync(fullPath).isDirectory()) {
      return (
        prefix + branch + item + '/\n' +
        generateTree(fullPath, prefix + spacer)
      );
    } else {
      return prefix + branch + item + '\n';
    }
  });
  return entries.join('');
}

const treeOutput = path.basename(process.cwd()) + '/\n' + generateTree(process.cwd());
fs.writeFileSync('tree.txt', treeOutput);
console.log('✅ tree.txt generated successfully!');
