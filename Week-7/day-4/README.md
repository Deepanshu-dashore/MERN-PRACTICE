# Week 7 - Day 4: Protected Routes & Authentication Middleware

## Overview
Demonstrates route protection with JWT verification middleware and role-based access control (RBAC).

## Middlewares
1. **`protect`**:
   - Reads `Authorization: Bearer <token>` header.
   - Decodes token with `jwt.verify(token, JWT_SECRET)`.
   - Looks up the user in MongoDB and attaches `req.user` without password.
   - Throws `401 Unauthorized` if token is missing, expired, or invalid.
2. **`authorizeRoles(...roles)`**:
   - Higher-order middleware checking whether `req.user.role` is in the allowed whitelist.
   - Returns `403 Forbidden` if role is unauthorized.

## Test Scenarios in Postman / Curl
1. **No Token** on `GET /api/users` -> `401 Not authorized, token missing`.
2. **Invalid Token** on `GET /api/users` -> `401 Invalid or expired token`.
3. **User Token** on `GET /api/admin/users` -> `403 Access denied: insufficient role`.
4. **Admin Token** on `GET /api/admin/users` -> `200 OK` (returns list of all users).

## How to Run
```bash
npm install
npm run dev
```
