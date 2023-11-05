const franc = require('franc');
const langs = require('langs');

const input = process.argv[2];
const langCode = franc(input);
console.log(langCode);

try {
    if (langCode === 'und') {
        console.log("Couldnt find it");
    } else {
        const language = langs.where("3", langCode);
        console.log(language.name);
    }
} catch (e) {
    console.log(e);
}