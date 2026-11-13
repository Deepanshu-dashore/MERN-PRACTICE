# Week 6 - Day 6-7 Mini-Project: Student Management API

## Project Overview
A production-ready Student Management RESTful API built using Node.js, Express, and MongoDB with Mongoose ODM. Features modular architecture, schema validation, relationship referencing with `.populate()`, advanced search, sorting, and pagination.

## Project Structure
```
day-6-7/
├── config/
│   └── db.js
├── controllers/
│   ├── courseController.js
│   └── studentController.js
├── models/
│   ├── courseModel.js
│   └── studentModel.js
├── routes/
│   ├── courseRoutes.js
│   └── studentRoutes.js
├── .env.example
├── .env
├── package.json
├── server.js
└── README.md
```

## Features
- **Database Connection**: Isolated in `config/db.js` using Mongoose.
- **Relational Modeling**: Students reference multiple Courses via `ObjectId` array, populated on fetch.
- **Full CRUD for Students & Courses**.
- **Course Enrollment**: `POST /api/students/:id/enroll` allows enrolling students into courses.
- **Regex Search & Filtering**: `?search=john&department=Computer+Science`.
- **Sorting & Pagination**: `?sortBy=gpa:desc&page=1&limit=5`.
- **Validation**: Name, Email (regex), Age range (16-70), Department enum, GPA range (0-10).

## API Endpoints

### Students
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/students` | Register a new student |
| `GET` | `/api/students` | Get all students (supports `search`, `department`, `sortBy`, `page`, `limit`) |
| `GET` | `/api/students/:id` | Get student by ID (populated courses) |
| `PUT` | `/api/students/:id` | Update student details |
| `DELETE` | `/api/students/:id` | Remove student record |
| `POST` | `/api/students/:id/enroll` | Enroll student in a course (`{ "courseId": "..." }`) |

### Courses
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/courses` | Create a course |
| `GET` | `/api/courses` | Get list of all courses |

## Running the Project
```bash
npm install
npm run dev
```
