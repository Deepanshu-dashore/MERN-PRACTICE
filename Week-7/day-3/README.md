# Week 7 - Day 3: User Login & JWT Token Generation

## Overview
Demonstrates authenticating incoming user credentials (email & password), matching hashes with `bcrypt.compare`, and signing JSON Web Tokens (JWT) containing user ID and role with an expiration period.

## Login Authentication Flow
1. Client sends POST to `/api/login` with `email` and `password`.
2. Look up user by email in MongoDB.
3. Compare provided password against stored hash using `bcrypt.compare()`.
4. If invalid: return unified `401 Unauthorized` ("Invalid email or password") to prevent user enumeration attacks.
5. If valid: sign token using `jsonwebtoken` library:
   ```javascript
   const token = jwt.sign(
     { id: user._id, role: user.role },
     process.env.JWT_SECRET,
     { expiresIn: "1d" }
   );
   ```
6. Return token and user details to client.

## API Endpoints
- `POST /api/register`
- `POST /api/login`

## How to Run
```bash
npm install
npm run dev
```
