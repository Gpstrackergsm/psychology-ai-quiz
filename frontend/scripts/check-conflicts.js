const fs = require('fs');
const path = require('path');

const CONFLICT_MARKERS = ['<<<<<<<', '=======', '>>>>>>>'];
const targetDir = path.join(process.cwd(), 'src');

/**
 * Recursively walk a directory and collect files containing git conflict markers.
 * @param {string} dir
 * @param {Array<{file: string, marker: string}>} conflicts
 */
function scanDirectory(dir, conflicts) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) {
      continue;
    }

    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      scanDirectory(entryPath, conflicts);
      continue;
    }

    const content = fs.readFileSync(entryPath, 'utf8');
    const marker = CONFLICT_MARKERS.find((token) => content.includes(token));

    if (marker) {
      conflicts.push({ file: path.relative(process.cwd(), entryPath), marker });
    }
  }
}

if (!fs.existsSync(targetDir)) {
  console.error(`Conflict check aborted: directory not found -> ${targetDir}`);
  process.exit(0);
}

const conflicts = [];
scanDirectory(targetDir, conflicts);

if (conflicts.length > 0) {
  console.error('\n✘ Git conflict markers detected in source files:\n');
  for (const conflict of conflicts) {
    console.error(` - ${conflict.file} contains marker "${conflict.marker}"`);
  }
  console.error('\nPlease resolve the merge conflicts above before running this command again.');
  process.exit(1);
}

process.exit(0);
