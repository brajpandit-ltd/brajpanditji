// tree.js
// Usage:
//   node tree.js --maxSize=5      -> ignore files bigger than 5 MB
//   node tree.js --maxSize=0      -> disable size filter

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const rootArg = args.find(a => !a.startsWith("--")) || ".";
const root = path.resolve(process.cwd(), rootArg);

const getFlag = (name, def = undefined) => {
  const hit = args.find(a => a.startsWith(`--${name}`));
  if (!hit) return def;
  const eq = hit.indexOf("=");
  if (eq === -1) return true; // boolean flag
  return hit.slice(eq + 1);
};

const includeDotfiles = Boolean(getFlag("all", false));
const maxDepth = getFlag("maxDepth") ? Number(getFlag("maxDepth")) : Infinity;
const maxSizeMB = getFlag("maxSize") ? Number(getFlag("maxSize")) : 5; // default 5 MB
const maxSizeBytes = maxSizeMB > 0 ? maxSizeMB * 1024 * 1024 : Infinity;

// Base ignore list
const defaultIgnore = new Set([
  "node_modules",
  ".git",
  ".hg",
  ".svn",
  ".DS_Store",
  ".idea",
  ".vscode",
  ".next",
  "out",
  "dist",
  "build",
  "coverage"
]);

const extraIgnore = (getFlag("ignore", "") || "")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean);

for (const name of extraIgnore) defaultIgnore.add(name);

function isIgnored(name) {
  if (!includeDotfiles && name.startsWith(".")) return true;
  return defaultIgnore.has(name);
}

async function readDirSafe(dir) {
  try {
    return await fs.promises.readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
}

function formatLine(prefix, isLast, name) {
  const branch = isLast ? "└── " : "├── ";
  return prefix + branch + name;
}

function nextPrefix(prefix, isLast) {
  return prefix + (isLast ? "    " : "│   ");
}

async function buildTree(dir, depth = 0, prefix = "") {
  if (depth > maxDepth) return [];
  const entries = await readDirSafe(dir);

  // Filter & sort
  const visible = entries
    .filter(e => !isIgnored(e.name))
    .sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

  const lines = [];
  for (let i = 0; i < visible.length; i++) {
    const e = visible[i];
    const isLast = i === visible.length - 1;
    const full = path.join(dir, e.name);
    let label = e.isDirectory() ? `${e.name}/` : e.name;

    if (e.isFile()) {
      try {
        const stat = await fs.promises.stat(full);
        if (stat.size > maxSizeBytes) {
          // Skip large files
          continue;
        }
      } catch {
        continue;
      }
    }

    lines.push(formatLine(prefix, isLast, label));

    if (e.isDirectory() && depth < maxDepth) {
      const children = await buildTree(full, depth + 1, nextPrefix(prefix, isLast));
      lines.push(...children);
    }
  }
  return lines;
}

(async () => {
  const stat = await fs.promises.stat(root).catch(() => null);
  if (!stat) {
    console.error(`Path not found: ${root}`);
    process.exit(1);
  }

  const header = path.basename(root) + (stat.isDirectory() ? "/" : "");
  const lines = [header];
  if (stat.isDirectory()) {
    const tree = await buildTree(root, 1, "");
    lines.push(...tree);
  }

  const outPath = path.resolve(process.cwd(), "tree.txt");
  await fs.promises.writeFile(outPath, lines.join("\n"), "utf8");
  console.log(`Wrote ${outPath}`);
})();
