// create node server that displays current time
const http = require('http');

const hostname = 'dnjoe';
const port = 3000;  
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const currentTime = new Date().toLocaleString();
    res.end(`Current Time: ${currentTime}\n`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});