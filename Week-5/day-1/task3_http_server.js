/**
 * Week 5 - Day 1 : Task 3 - Native Node.js HTTP Server
 * Demonstrates creating an HTTP web server without external libraries:
 * - Routing (/ , /about , /api/status , /api/student)
 * - Handling headers & status codes
 * - 404 handler
 */

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const { url, method } = req;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] Incoming Request: ${method} ${url}`);

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <html>
                <head><title>Node.js Native Server</title></head>
                <body style="font-family: sans-serif; padding: 40px; background: #f8f9fa;">
                    <h1 style="color: #00a76f;">🚀 Node.js HTTP Server Running!</h1>
                    <p>Welcome to Week 5 - Day 1: Native Node.js web server.</p>
                    <ul>
                        <li><a href="/about">/about</a> - About Server</li>
                        <li><a href="/api/status">/api/status</a> - Server Health JSON</li>
                        <li><a href="/api/student">/api/student</a> - Student Details JSON</li>
                    </ul>
                </body>
            </html>
        `);
    } else if (url === '/about' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>About Page</h1><p>Created by Dipanshu Dashore for MERN Practice Week-5.</p><a href="/">Back Home</a>');
    } else if (url === '/api/status' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'online',
            uptime: process.uptime(),
            nodeVersion: process.version,
            timestamp: new Date().toISOString()
        }, null, 2));
    } else if (url === '/api/student' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            name: 'Dipanshu Dashore',
            role: 'Full Stack MERN Intern',
            week: 5,
            module: 'Node.js & Express'
        }, null, 2));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            error: 'Not Found',
            message: `Route ${url} with method ${method} does not exist on this server.`,
            statusCode: 404
        }, null, 2));
    }
});

// Run if directly executed
if (require.main === module) {
    server.listen(PORT, () => {
        console.log(`\n=================================================`);
        console.log(`Server listening on http://localhost:${PORT}`);
        console.log(`Press Ctrl+C to terminate the server`);
        console.log(`=================================================\n`);
    });
}

module.exports = server;
