```markdown
# StaySync – Event / Meetup Planner

## 📌 Project Overview

StaySync is a full-stack MERN application that allows users to create, manage, and discover events. Users can register, log in, create events, and RSVP to events organized by others.

This project is built using **MongoDB, Express.js, React.js, and Node.js (MERN Stack)** and follows a **clean and scalable backend architecture** with controllers, services, repositories, middleware, and validations.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT-based authentication
- Protected API routes

### 📅 Event Management
- Create new events
- View all events
- View event details
- Update events (Organizer only)
- Delete events (Organizer only)

### 🙋 RSVP System
- Users can RSVP to events
- Toggle RSVP status
- View events created by the user
- View events the user has RSVPd to

### ⚙ Backend Architecture
- Clean layered architecture
- Repository and Service layers
- Global error handling middleware
- Secure password hashing with bcrypt

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt.js

### Frontend
- React.js
- Axios
- Context API

---

## 📁 Project Structure

```

staysync/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── repositories/
│   ├── services/
│   ├── routes/
│   ├── utils/
│   ├── validations/
│   └── server.js
│
└── frontend/
├── src/
├── components/
└── pages/

````

---

## 📦 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/mister-haseeb/staysync.git
cd staysync
````

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the backend server:

```bash
npm run dev
```

Server will run at:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run at:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

### Events

```
GET    /api/events
GET    /api/events/:id
POST   /api/events
PUT    /api/events/:id
DELETE /api/events/:id
POST   /api/events/:id/rsvp
GET    /api/events/my-events
GET    /api/events/my-rsvps
```

---

## 🔐 Security Features

* Password hashing using bcrypt
* JWT-based authentication
* Protected routes middleware
* Global error handling

---

## 📈 Future Improvements

* Event search and filtering
* Pagination
* Event categories
* Notifications system
* Image upload for events
* Real-time updates using WebSockets

---

## 👨‍💻 Author

**Muhammad Haseeb Ahmad**

NAVTTC MERN Stack Development Student

---

## 📄 License

This project is created for educational purposes under the NAVTTC MERN Stack program.

```
```
