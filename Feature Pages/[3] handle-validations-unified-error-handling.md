# Feature: Validation Handling and Error Handling (Backend)

## Motivation

We need to handle validation errors in frontend and backend so the user can clearly understand what is going wrong and how to fix it. Proper validation also improves security, prevents bad data from entering the database, and makes the API predictable for frontend developers.

---

## Description

The Validation & Error Handling system provides a **standardized way to validate incoming requests and return consistent error responses** across the entire backend.

This feature ensures:

- Invalid data never reaches the database
- All APIs return consistent error formats
- Frontend can easily display user-friendly messages
- Developers can debug issues quickly using structured error logs

The system handles:

- Request validation errors (bad input)
- Database validation errors (schema validation)
- Authentication & authorization errors
- Server/internal errors

---

## Design

### Error Response Format (Standardized API Contract)

All backend errors must follow a **single unified response structure**.

| Field   | Type   | Description                   |
| ------- | ------ | ----------------------------- |
| status  | string | "fail" or "error"             |
| message | string | Human readable message        |
| errors  | object | Field-level validation errors |
| code    | string | Machine-readable error code   |

### Example Response

#### Validation Error

```json
{
  "status": "fail",
  "code": "VALIDATION_ERROR",
  "message": "Invalid input data",
  "errors": {
    "email": "Email must be valid",
    "password": "Password must be at least 8 characters"
  }
}
```

## Centralized Error Handling Middleware

All errors must pass through a single global error handler.

It should handle:

| Error Type           | Example                  |
| -------------------- | ------------------------ |
| Validation errors    | Missing required field   |
| Cast errors          | Invalid MongoDB ObjectId |
| Duplicate key errors | Email already exists     |
| JWT errors           | Invalid/expired token    |
| Unknown errors       | Unexpected crash         |

---

## 4. Error Categories

| Category          | Status | Description              |
| ----------------- | ------ | ------------------------ |
| Operational Error | fail   | User mistake / bad input |
| Programming Error | error  | Bug or unexpected crash  |

---

## 5. Developer-Friendly Logging

Server logs must include:

- Full error stack
- Request URL
- Request body (safe fields only)
- Timestamp

Frontend should **never receive stack traces**.

---

## Implementation Logic

### 1. Custom Error Class

Create a reusable error class.

```ts
class AppError extends Error {
  constructor(message, statusCode, code) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 500 ? 'error' : 'fail';
    this.code = code;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
```

### Async Error Wrapper

```ts
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
```

### Global Error Middleware

```ts
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Development mode
  if (process.env.NODE_ENV === 'development') {
    return res.status(err.statusCode).json({
      status: err.status,
      code: err.code,
      message: err.message,
      stack: err.stack,
    });
  }

  // Production mode
  res.status(err.statusCode).json({
    status: err.status,
    code: err.code,
    message: err.isOperational ? err.message : 'Something went wrong',
  });
};

// Handling Common Mongoose Errors
// Invalid ObjectId
if (err.name === 'CastError') {
  err = new AppError('Invalid ID format', 400, 'INVALID_ID');
}

// Duplicate key
if (err.code === 11000) {
  err = new AppError('Email already exists', 400, 'DUPLICATE_FIELD');
}

// Validation error
if (err.name === 'ValidationError') {
  const errors = Object.values(err.errors).map((el) => el.message);
  err = new AppError(errors.join('. '), 400, 'VALIDATION_ERROR');
}

// 5. Example Controller Usage
exports.createUser = catchAsync(async (req, res, next) => {
  if (!req.body.email) {
    return next(new AppError('Email is required', 400, 'MISSING_EMAIL'));
  }

  const user = await User.create(req.body);

  res.status(201).json({
    status: 'success',
    data: user,
  });
});
```
