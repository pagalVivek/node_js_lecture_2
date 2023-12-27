const http = require('http')
const fs = require('fs')
const html = fs.readFileSync('./Template/index.html', 'utf-8')
// create a server
const server = http.createServer((req, res) => {
    let path = req.url 

    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        res.end(html.replace('{{%CONTENT%}}', 'You are in home page!'))

    }
    else if (path.toLocaleLowerCase() === '/about') {
        res.end(html.replace('{{%CONTENT%}}', 'You are in about page!'))
    }

    else if (path.toLocaleLowerCase() === '/product') {
        res.end(html.replace('{{%CONTENT%}}', 'You are in product page!'))
    }

    else if (path.toLocaleLowerCase() === '/contact') {
        res.end(html.replace('{{%CONTENT%}}', 'You are in contact page!'))
    }
    else {
        res.end(('{{%CONTENT%}}', 'ERROR 404 => page not found!'))
    }


    console.log("A new request received!");


})

// start a server
server.listen(8000, '127.0.0.1', () => {
    console.log('server started!')
})


