# Week 6 - Day 2: Connecting Node.js to MongoDB using Mongoose

## Overview
This task demonstrates setting up an Express server and connecting it asynchronously to MongoDB using the Mongoose ODM library, utilizing `.env` configuration files and handling connection lifecycle events.

## Features
- Asynchronous database connection with `async/await` and `try...catch`.
- Connection lifecycle event listeners: `connected`, `error`, `disconnected`.
- Dynamic configuration via `.env` (`PORT`, `MONGO_URI`).
- Health-check test route: `GET /ping` returning server and DB status.

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and adjust your `MONGO_URI`.
3. Start the server:
   ```bash
   npm run dev
   ```
4. Test in browser or Postman: `http://localhost:5000/ping`
