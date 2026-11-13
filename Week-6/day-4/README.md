# Week 6 - Day 4: Advanced CRUD, Query Operators, Pagination & Sorting

## Features Implemented
1. **Query Operators**:
   - `$gte` and `$lte` for price range filtering (`?minPrice=500&maxPrice=50000`).
   - `$in` for multi-category filtering (`?categories=Electronics,Books`).
   - `$regex` with `$options: "i"` for case-insensitive title search (`?search=phone`).
2. **Sorting**:
   - `?sortBy=price:asc` or `?sortBy=price:desc`.
3. **Pagination**:
   - `?page=1&limit=5` with `skip((page - 1) * limit)`.
   - Returns metadata with `total`, `page`, `limit`, and `totalPages`.
4. **ObjectId Validation**:
   - `mongoose.Types.ObjectId.isValid(id)` prevents unhandled BSON casting crashes.

## How to Run
```bash
npm install
npm run dev
```
