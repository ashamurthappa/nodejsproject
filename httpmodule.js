
///using httl module
// const http = require('http');
// const server = http.createServer();
// server.on('connection', (socket)=>{
//     console.log('new connection...')
// })
// server.listen(3000)
// console.log('listening on port 3000...')



const http = require('http');
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write('Hello world')
        res.end();
    }//http://localhost:3000/

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end()
    }//http://localhost:3000/api/courses
});


server.on('connection', (socket)=>{
    console.log('new connection...')
})
server.listen(3000)
console.log('listening on port 3000...')