const mymodule = require('./mymodule.js')
const folder = process.argv[2]
const ext = '.' + process.argv[3]

mymodule(folder, ext, (err, list) => {
    if (err) console.log(err);
    list.forEach((file) => {
        console.log(file);
    })
});