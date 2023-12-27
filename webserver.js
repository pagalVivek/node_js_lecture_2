const http = require('http')
const fs = require('fs')
const html = fs.readFileSync('./Template/index.html', 'utf-8')
const server = http.createServer((req, res) => {
    res.end(html);
    console.log("A new request received!");


})
server.listen(8000, '127.0.0.1', () => {
    console.log('server started!')
})


