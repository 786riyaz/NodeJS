const fs = require('fs');
const path = require('path');

const currentDir = process.cwd();
const outputFile = path.join(currentDir, 'folders.txt');

let output = "";

function readFolders(dir, level = 0) {

    const files = fs.readdirSync(dir);

    files.forEach(file => {

        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {

            output += " ".repeat(level * 2) + file + "\n";

            readFolders(filePath, level + 1);
        }
    });
}

readFolders(currentDir);

fs.writeFileSync(outputFile, output);

console.log("✅ Tree structure saved in folders.txt");