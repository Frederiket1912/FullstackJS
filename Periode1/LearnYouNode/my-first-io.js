const fs = require('fs');

let file_content = fs.readFileSync(process.argv[2])

let file_content_str = file_content.toString();

let file_content_arr =  file_content_str.split('\n');

console.log(file_content_arr.length-1);