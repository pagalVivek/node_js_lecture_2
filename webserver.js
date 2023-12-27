const http = require('http') 

const server = http.createServer((req, res) => {
    res.end("<h1> THis is header</h1>");
    console.log("A new request received!");


})
server.listen(8000, '127.0.0.1', () => {
    console.log('server started!')
})


