const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Welcome to our Homepage</h1>')
    } else if (req.url === '/about') {
        res.end('<h1>This is the about section</h1>')
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
        <h3>The page you are looking for is not available</h3>
        <a href="/">Back to Home </a>
        `)
    }
})

server.listen(5000)