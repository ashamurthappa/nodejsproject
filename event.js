
///Event Modules
//a signal that indicates something has happned in our application 
const EventEmitter = require('events'); //EventEmitter is a class
//funtion we cal will have methods
const emitter = new EventEmitter();
///rister a listner 

const Logger = require('./logger');
const logger = new Logger();
logger.on('messageLogged', (arg)=>{
    console.log('Listner is called', arg)
})
logger.log('message');
emitter.emit('messageLogged', {id:1, url: 'http://'})
//emit means making a noise or produce noise 