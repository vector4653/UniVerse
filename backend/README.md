# Backend Authentication Setup

## MongoDB Authentication System

This backend provides JWT-based authentication with MongoDB for the UniVerse application.

## Prerequisites

- Node.js installed
- MongoDB installed and running locally (or use MongoDB Atlas for cloud database)

## Setup Instructions

1. **Install MongoDB locally** (if not already installed):
   ```bash
   # macOS
   brew install mongodb-community
   brew services start mongodb-community
   ```

2. **Configure environment variables**:
   - Update the `.env` file with your settings
   - Change `JWT_SECRET` to a secure random string in production
   - Update `MONGODB_URI` if using MongoDB Atlas or different connection

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the server**:
   ```bash
   npm run dev    # Development with auto-restart
   npm start      # Production
   ```

## API Endpoints

### Authentication Routes

Base URL: `http://localhost:5000/api/auth`

#### 1. Sign Up
- **POST** `/api/auth/signup`
- **Body**:
  ```json
  {
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "token": "jwt_token_here",
    "user": {
      "id": "user_id",
      "username": "johndoe",
      "email": "john@example.com"
    }
  }
  ```

#### 2. Login
- **POST** `/api/auth/login`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "token": "jwt_token_here",
    "user": {
      "id": "user_id",
      "username": "johndoe",
      "email": "john@example.com"
    }
  }
  ```

#### 3. Get Current User
- **GET** `/api/auth/me`
- **Headers**: 
  ```
  Authorization: Bearer <token>
  ```
- **Response**:
  ```json
  {
    "success": true,
    "user": {
      "id": "user_id",
      "username": "johndoe",
      "email": "john@example.com",
      "createdAt": "2025-11-23T00:00:00.000Z"
    }
  }
  ```

## Project Structure

```
backend/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   └── authController.js  # Authentication logic
├── middleware/
│   └── auth.js           # JWT verification middleware
├── models/
│   └── User.js           # User schema
├── routes/
│   └── authRoutes.js     # Auth routes
├── .env                  # Environment variables
├── .env.example          # Example env file
├── server.js             # Main server file
└── package.json
```

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation with express-validator
- Protected routes middleware
- Email format validation
- Minimum password length requirements

## Testing with cURL

```bash
# Sign up
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"test123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'

# Get current user (replace YOUR_TOKEN with actual token)
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN"
```
