const fs = require('fs');
const path = require('path');

const currentDir = process.cwd();
const outputFile = path.join(currentDir, 'folders.txt');

// ✅ Folders to skip (comma separated)
const skipFolders = [
    "node_modules",
    ".git",
    ".vscode",
    "dist",
    "build"
];

let output = "";

function readFolders(dir, level = 0) {

    const items = fs.readdirSync(dir);

    items.forEach(item => {

        // ✅ Skip folders
        if (skipFolders.includes(item)) {
            return;
        }

        const itemPath = path.join(dir, item);
        const stats = fs.statSync(itemPath);

        // Add item with indentation
        output += " ".repeat(level * 2) + item;

        if (stats.isDirectory()) {
            output += "/";
        }

        output += "\n";

        // Go deeper if folder
        if (stats.isDirectory()) {
            readFolders(itemPath, level + 1);
        }
    });
}

readFolders(currentDir);

fs.writeFileSync(outputFile, output);

console.log("✅ Tree structure with files saved in folders.txt");