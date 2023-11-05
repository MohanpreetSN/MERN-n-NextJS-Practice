const fs = require('fs');
// const args = process.argv.slice(2);
const folderName = process.argv[2] || 'Project';

// fs.mkdir(args[0], {recursive: true}, (err) => {
//     if (err) throw err;
// });

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, "");
    fs.writeFileSync(`${folderName}/app.css`, "");
    fs.writeFileSync(`${folderName}/app.js`, "");
} catch (e) {
    console.log(e);
}