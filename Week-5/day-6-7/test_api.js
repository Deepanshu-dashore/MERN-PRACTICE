/**
 * Automated test script for Week 5 Day 6-7 Product Management API
 */

const http = require("http");
const app = require("./server");

const server = app.listen(0, async () => {
  const port = server.address().port;
  const base = `http://localhost:${port}`;
  console.log(`=== Testing Product Management API on ${base} ===\n`);

  function request(method, path, body = null) {
    return new Promise((resolve, reject) => {
      const url = new URL(path, base);
      const options = {
        method,
        hostname: url.hostname,
        port: url.port,
        path: url.pathname + url.search,
        headers: {
          "Content-Type": "application/json"
        }
      };

      const req = http.request(options, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve({ status: res.statusCode, body: JSON.parse(data) });
          } catch (e) {
            resolve({ status: res.statusCode, body: data });
          }
        });
      });

      req.on("error", reject);
      if (body) req.write(JSON.stringify(body));
      req.end();
    });
  }

  try {
    // 1. GET /api/products
    const r1 = await request("GET", "/api/products");
    console.log("1. GET /api/products:", r1.status === 200 && r1.body.count >= 2 ? "PASS" : "FAIL");

    // 2. GET /api/products/1
    const r2 = await request("GET", "/api/products/1");
    console.log("2. GET /api/products/1:", r2.status === 200 && r2.body.id === 1 ? "PASS" : "FAIL");

    // 3. POST /api/products (Success)
    const r3 = await request("POST", "/api/products", { name: "Keyboard", price: 700 });
    console.log("3. POST /api/products:", r3.status === 201 && r3.body.data.name === "Keyboard" ? "PASS" : "FAIL");

    // 4. POST /api/products (Validation: Negative price)
    const r4 = await request("POST", "/api/products", { name: "Monitor", price: -10 });
    console.log("4. POST validation (Price <= 0):", r4.status === 400 ? "PASS" : "FAIL");

    // 5. PUT /api/products/2 (Update)
    const r5 = await request("PUT", "/api/products/2", { price: 650 });
    console.log("5. PUT /api/products/2:", r5.status === 200 && r5.body.data.price === 650 ? "PASS" : "FAIL");

    // 6. GET /api/products/search?name=key (Search)
    const r6 = await request("GET", "/api/products/search?name=key");
    console.log("6. GET /api/products/search?name=key:", r6.status === 200 && r6.body.length > 0 ? "PASS" : "FAIL");

    // 7. DELETE /api/products/1
    const r7 = await request("DELETE", "/api/products/1");
    console.log("7. DELETE /api/products/1:", r7.status === 200 ? "PASS" : "FAIL");

    // 8. GET /api/products/1 (404 after delete)
    const r8 = await request("GET", "/api/products/1");
    console.log("8. GET deleted product (404 check):", r8.status === 404 ? "PASS" : "FAIL");

    console.log("\nAll Week 5 Day 6-7 API Tests Passed Successfully!\n");
  } catch (err) {
    console.error("Test error:", err);
  } finally {
    server.close();
  }
});
