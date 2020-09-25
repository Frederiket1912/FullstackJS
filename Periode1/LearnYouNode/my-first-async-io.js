const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
        return console.log(err)
      }
    let file_content_arr = data.split('\n');
    console.log(file_content_arr.length-1);
})



