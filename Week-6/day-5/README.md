# Week 6 - Day 5: Data Validation & Relationships (Embedding vs Referencing)

## Concepts
1. **Schema Validation**:
   - Built-in validators: `required`, `minlength`, `enum`, `lowercase`, `match`.
   - Custom validators: `validate` callback functions for validating 10-digit mobile numbers and password criteria.
2. **Relationships in MongoDB**:
   - **Embedded Documents**: `Order.items` array embedding `orderItemSchema`.
   - **Referencing Documents**: `Order.user` references `User._id` using `mongoose.Schema.Types.ObjectId`.
   - Querying with `.populate("user", "name email mobile")` to rehydrate relational data.

## API Endpoints
- `POST /api/users` - Create user with custom validation
- `GET /api/users` - Get all users
- `POST /api/orders` - Place order linked to a user ID
- `GET /api/orders` - Get all orders populated with user details
- `GET /api/orders/user/:userId` - Get orders placed by a specific user

## How to Run
```bash
npm install
npm run dev
```
