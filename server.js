const http = require('https');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    let html = `
        <html>
            <body>
                <h1>Hello, World!</h1>
                <p>Welcome to my server.</p>
                <p>Time: ${new Date()}</p>
            </body>
        </html>
    `;

    res.end(html);
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
