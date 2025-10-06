const fs = require("fs");

console.log("test");

const content = fs.readFileSync('test.txt', 'utf8');
const lines = content.split('\n');

const regex = /^(\d+)\s+(.+?)\s+(Easy|Medium|Hard)$/;

const formatLine = (line) => {
    const match = line.match(regex);
    if (match) {
        const [, number, title, difficulty] = match;
        const formattedTitle = title.replace(/\s+/g, '-');
        return `${number}-${formattedTitle}-${difficulty}`;
    }
    return line;
};

const linesFormatted = [];
lines.forEach((line, index) => {
    if (line === "")
        console.log("Empty line");
    else
        linesFormatted.push(formatLine(line));
});


linesFormatted.forEach((folderName) => {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
        console.log(`Created folder: ${folderName}`);
    } else {
        console.log(`Folder already exists: ${folderName}`);
    }
});

console.log("Folder created successfully");