// Program to create a text file containing all folder and subfolder names

const fs = require('fs');
const path = require('path');

// Current directory
const currentDir = process.cwd();

// Output file
const outputFile = path.join(currentDir, 'folders.txt');

// Store folder names
let folderList = [];

// Recursive function
function readFolders(dir) {

    const files = fs.readdirSync(dir);

    files.forEach(file => {

        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {

            // Add folder name with path
            folderList.push(filePath);

            // Go inside subfolder
            readFolders(filePath);
        }
    });
}

// Start scanning
readFolders(currentDir);

// Write to text file
fs.writeFileSync(outputFile, folderList.join('\n'));

console.log("✅ Folder list saved in folders.txt");