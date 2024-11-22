
///Built in node modules usage
//node itself comes with bunch of usual modules we wil learn how to make us of them
//using build in modules available from node 
const path = require('path')
var pathObj = path.parse(__filename)
console.log(pathObj) //result below
// {
//     root: 'C:\\',
//     dir: 'C:\\nodejsproject',
//     base: 'app.js',
//     ext: '.js',
//     name: 'app'
// }
