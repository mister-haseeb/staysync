# 🚀 StaySync – Event / Meetup Planner

StaySync is a full-stack MERN application where users can create events, manage them, and RSVP to events created by others.

It includes authentication, protected routes, and a complete event management system built with a scalable backend architecture.

---

## 📌 Features

### 🔐 Authentication
- User registration & login
- JWT-based authentication
- Protected routes (frontend + backend)

### 📅 Event Management
- Create events (title, description, date, location)
- View all events
- View single event details
- Update & delete events (organizer only)

### 🙋 RSVP System
- RSVP / Un-RSVP to events
- View events created by user
- View events user has joined

### ⚙ System Features
- Axios interceptor for token handling
- Role-based event access (organizer control)
- Clean backend architecture (controllers/services/routes)

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Context API

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt.js

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
│   ├── services/
│   ├── routes/
│   └── server.js
│
└── frontend/
├── src/
├── components/
├── context/
├── pages/
├── utils/
└── App.js

````

---

## 🚀 Installation

### 1️⃣ Clone Repo
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

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

Run server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 📡 API Endpoints

### Auth

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
```

### RSVP

```
POST /api/events/:id/rsvp
GET  /api/events/my-events
GET  /api/events/my-rsvps
```

---

## 🔐 Security

* JWT Authentication
* Password hashing (bcrypt)
* Protected routes middleware
* Centralized error handling

---

## 📈 Future Improvements

* Search & filtering
* Pagination
* Event categories
* Notifications
* Image upload
* Real-time updates

---

## 👨‍💻 Author

NAVTTC MERN Stack Student Project
