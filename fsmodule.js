

const fs = require('fs')
const files =  fs.readdirSync('./');
console.log(files) // [ 'app.js', 'logger.js' ]




fs.readdir('./',function(err, files){
    if(err) console.log(err)
    else console.log(files)
})
//[ 'app.js', 'logger.js' ]

fs.readdir('$',function(err, files){
    if(err) console.log(err)
    else console.log(files)
})
///this wil error out bcz \\$ we dont have any files
// [Error: ENOENT: no such file or directory, scandir 'C:\nodejsproject\$'] {
//     errno: -4058,
//     code: 'ENOENT',
//     syscall: 'scandir',
//     path: 'C:\\nodejsproject\\$'
//   }

