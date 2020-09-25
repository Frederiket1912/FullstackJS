const fs = require('fs')
const path = require('path')

    

    module.exports = function (folder, ext, callback) {
    fs.readdir(folder, (err, files) => {
      if (err) return callback(err)
      files.forEach( (file) => {
          let result = [];
        if (path.extname(file) === ext) {
          result.push(file);
        }
        return callback(null, result);
      })
    })
}