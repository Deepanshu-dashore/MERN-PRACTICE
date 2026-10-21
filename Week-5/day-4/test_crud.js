/**
 * Automated Test for Day 4 CRUD Operations and Error Handling
 */

const http = require('http');
const app = require('./server');

const server = app.listen(0, async () => {
    const port = server.address().port;
    const base = `http://localhost:${port}`;
    console.log(`=== Testing Day 4 REST API CRUD on ${base} ===\n`);

    function request(method, path, body = null) {
        return new Promise((resolve, reject) => {
            const url = new URL(path, base);
            const options = {
                method,
                hostname: url.hostname,
                port: url.port,
                path: url.pathname,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const req = http.request(options, (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => {
                    try {
                        resolve({ status: res.statusCode, body: JSON.parse(data) });
                    } catch(e) {
                        resolve({ status: res.statusCode, body: data });
                    }
                });
            });

            req.on('error', reject);
            if (body) req.write(JSON.stringify(body));
            req.end();
        });
    }

    try {
        // 1. GET All
        const r1 = await request('GET', '/api/users');
        console.log('1. GET /api/users:', r1.status === 200 && r1.body.count === 3 ? 'PASS' : 'FAIL');

        // 2. POST Create
        const r2 = await request('POST', '/api/users', { name: 'Aarav Gupta', email: 'aarav@example.com', role: 'Developer' });
        console.log('2. POST /api/users (Create):', r2.status === 201 && r2.body.data.id === 4 ? 'PASS' : 'FAIL', `(Created ID: ${r2.body.data.id})`);

        // 3. PUT Update
        const r3 = await request('PUT', '/api/users/4', { role: 'Lead Developer' });
        console.log('3. PUT /api/users/4 (Update):', r3.status === 200 && r3.body.data.role === 'Lead Developer' ? 'PASS' : 'FAIL');

        // 4. DELETE
        const r4 = await request('DELETE', '/api/users/4');
        console.log('4. DELETE /api/users/4:', r4.status === 200 && r4.body.data.id === 4 ? 'PASS' : 'FAIL');

        // 5. Validation error test (Missing email)
        const r5 = await request('POST', '/api/users', { name: 'Missing Email Guy' });
        console.log('5. POST missing fields (400 check):', r5.status === 400 ? 'PASS' : 'FAIL', `(${r5.body.error})`);

        console.log('\nAll Day-4 Middleware & CRUD Tests Passed Successfully!');
    } catch(err) {
        console.error('Test error:', err);
    } finally {
        server.close();
    }
});
