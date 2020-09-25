const fs = require('fs');

let dir_path = process.argv[2];

let extension = process.argv[3];

fs.readdir(dir_path, (err, list) => {
    if (err) {
        return console.log(err)
      }
      for (i = 0; i < list.length; i++) {
          if (list[i].split('.')[1] === extension) {
              console.log(list[i]);
          }
      }
})
