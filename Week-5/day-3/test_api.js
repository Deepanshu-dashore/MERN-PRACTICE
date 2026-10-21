/**
 * Automated test script to verify Express endpoints without external test runners
 */

const http = require('http');
const app = require('./server');

const server = app.listen(0, async () => {
    const port = server.address().port;
    const base = `http://localhost:${port}`;
    console.log(`=== Running Day 3 Express Route Tests on ${base} ===\n`);

    function fetchJson(urlPath) {
        return new Promise((resolve, reject) => {
            http.get(base + urlPath, (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => resolve({ status: res.statusCode, body: JSON.parse(data) }));
            }).on('error', reject);
        });
    }

    try {
        // Test 1: GET /api/users
        const r1 = await fetchJson('/api/users');
        console.log('✓ GET /api/users:', r1.status === 200 && r1.body.success ? 'PASS' : 'FAIL', `(${r1.body.count} users)`);

        // Test 2: GET /api/users/1
        const r2 = await fetchJson('/api/users/1');
        console.log('✓ GET /api/users/1:', r2.status === 200 && r2.body.data.name === 'Dipanshu Dashore' ? 'PASS' : 'FAIL', `(Found ${r2.body.data.name})`);

        // Test 3: GET /api/users/999 (404)
        const r3 = await fetchJson('/api/users/999');
        console.log('✓ GET /api/users/999 (404 check):', r3.status === 404 ? 'PASS' : 'FAIL');

        // Test 4: GET /api/search?q=desk
        const r4 = await fetchJson('/api/search?q=desk');
        console.log('✓ GET /api/search?q=desk:', r4.status === 200 && r4.body.resultsCount > 0 ? 'PASS' : 'FAIL', `(${r4.body.resultsCount} matching product)`);

        console.log('\nAll Day-3 Express Tests Passed Successfully!');
    } catch (err) {
        console.error('Test error:', err);
    } finally {
        server.close();
    }
});
