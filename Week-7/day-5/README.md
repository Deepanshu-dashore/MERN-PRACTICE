# Week 7 - Day 5: Security Best Practices for Express APIs

## Production Security Measures
1. **Securing Environment Variables (`.env`)**:
   - Never commit `.env` or hardcode JWT secrets/DB passwords in source code.
2. **Helmet HTTP Headers**:
   - Automatically sets defense headers: `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Strict-Transport-Security`.
3. **CORS (Cross-Origin Resource Sharing)**:
   - Restricts API access exclusively to trusted origins (e.g. `http://localhost:5173`).
4. **Rate Limiting (`express-rate-limit`)**:
   - Caps requests per IP (`100 requests per 15 minutes`) to prevent brute-force credential stuffing and DDoS exhaustion.
5. **Safe Error Handling**:
   - Sanitizes production responses to generic messages (`Internal Server Error`), preventing leakage of database paths, queries, or credentials in stack traces.

## How to Run
```bash
npm install
npm run dev
```
