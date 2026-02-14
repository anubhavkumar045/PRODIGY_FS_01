# Secure User Authentication System

A full-stack user authentication system built with Node.js, Express, MongoDB, and vanilla JavaScript. Features JWT-based authentication, password hashing with bcrypt, and a modern, responsive UI.

## Features

- ✅ User registration and login
- ✅ JWT token-based authentication
- ✅ Password hashing with bcrypt
- ✅ Protected routes and dashboard
- ✅ Modern, responsive UI with glassmorphism design
- ✅ Form validation
- ✅ Error handling and user feedback

## Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt for password hashing
- jsonwebtoken for JWT authentication

**Frontend:**
- HTML5
- CSS3 (custom styling, no frameworks)
- Vanilla JavaScript

## Project Structure

```
PRODIGY_FS_01/
├── server/
│   ├── index.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── .env.example
├── client/
│   ├── register.html
│   ├── login.html
│   ├── dashboard.html
│   ├── style.css
│   └── script.js
├── package.json
├── .gitignore
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```bash
git clone https://github.com/anubhavkumar045/PRODIGY_FS_01.git
cd PRODIGY_FS_01
```

2. Install dependencies
```bash
npm install
```

3. Create .env file
```bash
cp server/.env.example .env
```

4. Update .env with your configuration
```
MONGODB_URI=mongodb://localhost:27017/auth_system
JWT_SECRET=your_secret_key_here
PORT=5000
```

5. Start MongoDB (if running locally)
```bash
mongod
```

6. Run the application
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

7. Open your browser and navigate to:
```
http://localhost:5000
```

## API Endpoints

### POST /api/auth/register
Register a new user
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### POST /api/auth/login
Login with existing credentials
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### GET /api/auth/user
Get authenticated user data (requires JWT token in Authorization header)
```
Authorization: Bearer <token>
```

## Security Features

- Passwords are hashed using bcrypt with salt rounds
- JWT tokens expire after 1 hour
- Protected routes require valid JWT token
- Input validation on both client and server
- Secure HTTP headers with CORS

## License

MIT

## Author

Anubhav Kumar
