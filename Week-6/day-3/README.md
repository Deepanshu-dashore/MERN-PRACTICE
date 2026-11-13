# Week 6 - Day 3: Mongoose Schemas, Models & CRUD Operations

## Overview
This task implements a student management backend with Mongoose schemas, schema-level validations, custom middleware, and modular controller/router architecture.

## Model Schema (`models/Student.js`)
- `name`: String, required, trimmed
- `age`: Number, required, min: 5, max: 80
- `department`: String, default "General"
- `createdAt`: Date, default current timestamp

## API Endpoints
- `POST /api/students` - Create a student
- `GET /api/students` - List all students
- `GET /api/students/:id` - Fetch a single student
- `PUT /api/students/:id` - Update student with validation (`runValidators: true`)
- `DELETE /api/students/:id` - Delete student

## How to Run
```bash
npm install
npm run dev
```
