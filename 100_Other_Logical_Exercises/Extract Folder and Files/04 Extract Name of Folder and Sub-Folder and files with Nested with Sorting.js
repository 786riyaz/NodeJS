const fs = require('fs');
const path = require('path');

const currentDir = process.cwd();
const outputFile = path.join(currentDir, 'folders.txt');

let output = "";

function readFolders(dir, level = 0) {

    let items = fs.readdirSync(dir);

    // Sort: folders first, files second
    items.sort((a, b) => {
        const aDir = fs.statSync(path.join(dir, a)).isDirectory();
        const bDir = fs.statSync(path.join(dir, b)).isDirectory();
        return bDir - aDir;
    });

    items.forEach(item => {

        const itemPath = path.join(dir, item);
        const stats = fs.statSync(itemPath);

        output += " ".repeat(level * 2) + item;

        if (stats.isDirectory()) {
            output += "/";
        }

        output += "\n";

        if (stats.isDirectory()) {
            readFolders(itemPath, level + 1);
        }
    });
}

readFolders(currentDir);

fs.writeFileSync(outputFile, output);

console.log("✅ Tree structure with files saved in folders.txt");