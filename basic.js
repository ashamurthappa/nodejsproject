

//evevry node will have atleast one module one file/main module is app.js
///so in node everyfile file is a module
//variables defined in that module will be scope to that module 

console.log(module)
//result is below
// {
//     id: '.',
//     path: 'C:\\nodejsproject',
//     exports: {},
//     filename: 'C:\\nodejsproject\\app.js',
//     loaded: false,
//     children: [],
//     paths: [ 'C:\\nodejsproject\\node_modules', 'C:\\node_modules' ]
//   }

///modeule will have these properties we can use it based on our implemmentation



//now load a module
//var logger = require('./logger') ///means --> require('./logger.js');
//console.log(logger) ///{ log: [Function: log], endPoint: 'http://mylogger.io/log' }
//logger.log('message123') //we can call our log function as so result is message123


//const log = require('./logger') 
//log('messasewee')



function sayname(params) {
    console.log("hello " + params)
}
sayname("Asha") //hello Asha

var message = ''
console.log(global.message) //undefined
//variables defined using var wont be added to global object thats y it is undefined

//in node we can access global object but not window object 
//window obj is in browser 