const fs = require('fs');
const path = require('path');

const currentDir = process.cwd();
const outputFile = path.join(currentDir, 'folders.txt');

let output = "";

function readFolders(dir, level = 0) {

    const items = fs.readdirSync(dir);

    items.forEach(item => {

        const itemPath = path.join(dir, item);
        const stats = fs.statSync(itemPath);

        // Add folder/file with indentation
        output += " ".repeat(level * 2) + item;

        if (stats.isDirectory()) {
            output += "/"; // mark folder
        }

        output += "\n";

        // If folder → go deeper
        if (stats.isDirectory()) {
            readFolders(itemPath, level + 1);
        }
    });
}

readFolders(currentDir);

fs.writeFileSync(outputFile, output);

console.log("✅ Tree structure with files saved in folders.txt");