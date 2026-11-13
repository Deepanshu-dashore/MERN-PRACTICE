# Week 7 - Day 2: User Registration & Password Hashing

## Overview
Demonstrates secure user registration in Express and MongoDB using `bcryptjs` for one-way salting and hashing.

## Why Plaintext Password Storage is Dangerous
If database records are leaked, plaintext passwords immediately compromise user credentials across all services. `bcryptjs` creates salted, irreversible hashes (`$2a$10$...`) that defend against dictionary and rainbow table attacks.

## API Endpoint
- **`POST /api/register`**
  - **Body**:
    ```json
    {
      "name": "Aman",
      "email": "aman@example.com",
      "password": "mypassword123"
    }
    ```
  - **Validation**:
    - Validates presence of `name`, `email`, and `password`.
    - Checks for existing accounts with the same email.
    - Hashes the password with 10 salt rounds before persisting to MongoDB.
    - Excludes password from the response payload.

## How to Run
```bash
npm install
npm run dev
```
