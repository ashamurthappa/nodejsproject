//(function (exports,require,module, __filename, __dirname){

    //console.log(__filename); //C:\\nodejsproject
    ///console.log(__dirname) //'C:\\nodejsproject\\app.js'

    const EventEmitter = require('events');

    var url = 'http://mylogger.io/log';

    class Logger extends EventEmitter{
        log(message){
            //send on HTTP request
            console.log(message)
            this.emit('messageLogged', {id:1, url: 'http://'})
        }
    }
    module.exports = Logger;

    //module.exports.log = log;
    //module.exports.endPoint = url; /// no need to export just an example, endPoint is a name to import it in another file

    //instead of exporting an entire object , we can export just single fucntion alos
    //module.exports = log;

    //basically a module is wrapped inside a IIFE as below
    // (function (exports,require,module, __filename, __dirname){
    // //ENTIRE module code here
    // })
    //so always node executes using IIFE this is called module swrapper function

    //so we can write exports as below
    // module.exports = log;
    // module.exports.log = log;
    // exports.log = log;
    // exports = log;


   
//})