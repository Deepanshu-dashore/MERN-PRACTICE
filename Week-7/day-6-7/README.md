# Week 7 - Day 6-7 Mini-Project: Full Stack Secure Authentication System

## Project Overview
A complete, production-ready Full Stack Authentication System adhering strictly to industry best practices.
- **Backend**: Node.js, Express, MongoDB with Mongoose, JWT access tokens (15m expiration), refresh tokens (7d expiration) with DB persistence and rotation, password hashing with bcrypt, Helmet, CORS, and Express Rate Limit.
- **Frontend**: Modern React (Vite) styled with Tailwind CSS, Axios interceptors with automatic token refresh on 401 Unauthorized, React Router 6 with `PrivateRoute` and `AdminRoute`, global authentication context, User Profile management, and Admin Dashboard.

---

## Project Structure
```
day-6-7/
├── backend/
│   ├── config/ (or server.js setup)
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   ├── utils/
│   │   └── generateTokens.js
│   ├── .env.example
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AdminRoute.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Register.jsx
│   │   ├── Services/
│   │   │   └── api.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## Backend Features
1. **Secure Registration**: Hashes passwords with bcrypt (10 salt rounds). Strips password from responses.
2. **Access & Refresh Tokens**: Short-lived access token (15 mins) and long-lived refresh token (7 days).
3. **Token Rotation & Revocation**: Refresh tokens are stored in the database. When `/api/refresh-token` is requested, the old refresh token is revoked and replaced with a new pair.
4. **Logout**: Revokes the refresh token from MongoDB.
5. **RBAC (Role-Based Access Control)**:
   - `GET /api/profile` (Protected - all authenticated users)
   - `PUT /api/profile` (Protected - update name or password)
   - `GET /api/admin/users` (Admin only - returns all users)
6. **Security Hardening**:
   - Helmet HTTP headers
   - CORS origin whitelist
   - Express rate limiting

---

## Frontend Features
1. **Axios Interceptor**:
   - Automatically injects `Authorization: Bearer <accessToken>` header on outgoing requests.
   - Intercepts 401 responses, calls `/api/refresh-token` with the refresh token, updates storage, and retries the failed request seamlessly.
   - Clears storage and redirects to `/login` if refresh fails.
2. **Context API**: `AuthContext` provides `user`, `login`, `register`, `logout`, `updateUser`, `isAuthenticated`, and `isAdmin`.
3. **Route Guards**:
   - `<PrivateRoute>`: Redirects non-logged-in users to `/login`.
   - `<AdminRoute>`: Displays "Access Denied" if user does not possess `admin` role.
4. **Pages**:
   - `Register`: Full validation and redirection to login.
   - `Login`: Credential verification and redirection to `/profile`.
   - `Profile`: View user details, member since timestamp, and inline profile editing.
   - `AdminDashboard`: Admin-only table listing all registered users and roles.

---

## How to Run

### 1. Run Backend
```bash
cd backend
npm install
npm run dev
# Backend runs on http://localhost:5000
```

### 2. Run Frontend
```bash
cd frontend
npm install
npm run dev
# Frontend runs on http://localhost:5173
```

