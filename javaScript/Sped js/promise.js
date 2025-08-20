const fs = require('fs')
console.log("starting program");
const contents = fs.readFileSync('./hellow.txt', 'utf-8')
console.log("file reading completetd", contents);
console.log('End of program');



