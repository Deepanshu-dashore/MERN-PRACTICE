# Week 7 - Day 1: Introduction to Authentication & Authorization

## Core Concepts

### 1. Authentication vs Authorization
| Feature | Authentication (AuthN) | Authorization (AuthZ) |
|---|---|---|
| **Meaning** | Identifying the user ("Who are you?") | Granting access permissions ("What are you allowed to do?") |
| **Timing** | Happens first | Happens after authentication |
| **Mechanism** | Password, OTP, Biometric, OAuth | Roles, scopes, permissions |
| **Example** | Submitting email & password to login | Checking if user role is "admin" to access `/admin` route |

### 2. Authentication Methods
- **Cookie-Based**: Server sends a cookie stored by browser. Used in traditional server-rendered websites.
- **Session-Based**: Server creates a stateful session in memory or Redis and sends a `sessionId` cookie. Heavy for high traffic, difficult to scale across microservices.
- **Token-Based (JWT)**: Server signs a stateless token and gives it to client. Client attaches token in `Authorization: Bearer <token>` header for requests. Scales easily across multiple servers and mobile apps.

### 3. JWT (JSON Web Token) Structure
A JWT consists of three parts separated by dots (`.`): `header.payload.signature`
1. **Header**: Contains algorithm and token type (`{ "alg": "HS256", "typ": "JWT" }`).
2. **Payload**: Contains claims/data (e.g., `id`, `name`, `role`, `exp`, `iat`). Note: Payload is Base64Url encoded, NOT encrypted. Never store passwords or secrets in JWT payload!
3. **Signature**: Created using `HMACSHA256(base64Url(header) + "." + base64Url(payload), secretKey)`. Prevents tampering.

### 4. Hands-on Lab
Run the provided demonstration script:
```bash
node jwt_demo.js
```
This shows how tokens are constructed, decoded, verified, and how modifying the payload without the secret immediately invalidates the signature.
