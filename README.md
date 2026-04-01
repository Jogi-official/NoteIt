# 🚀 NoteIt

<p align="center">
  A Full-Stack Note-Taking Application built with Angular, Node.js, Express, and MongoDB.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-Angular-DD0031?logo=angular&logoColor=white" />
  <img src="https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-blue" />
</p>

---

## 📌 Overview

**NoteIt** is a modular full-stack productivity application that allows users to create, manage, and organize notes efficiently.

The project demonstrates:

- Clean architecture
- REST API design
- Angular modular structure
- MongoDB integration
- Environment-based configuration

This project is designed to be scalable and production-ready.

---

## ✨ Features

- 📝 Create, edit, and delete notes
- 📂 Organized component structure
- 🔄 RESTful API integration
- 💾 MongoDB data persistence
- ⚙️ Environment-based configuration
- 🎨 Clean and responsive UI
- 🧩 Modular Angular architecture

---

## 🚀 Feature Pages (Design Docs)

**Feature 1**: [Feature Progress](./Feature%20Pages/feature-progress.md)
**Feature 2** [Auto Scheduling](./Feature%20Pages/auto-task-scheduling.md)

## 🏗️ Tech Stack

### Frontend

- Angular
- TypeScript
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Dev Tools

- Nodemon
- Git
- VS Code

---

## 📂 Project Structure

```
NoteIt/
├── backend/
│   ├── app.js
│   ├── server.js
│   ├── config.env
│   ├── controllers/
│   ├── models/
│   └── routes/
├── public/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── note-area/
│   │   │   ├── sidebar/
│   │   ├── services/
│   ├── index.html
│   └── main.ts
├── package.json
├── angular.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/noteit.git
cd noteit
```

### 2️⃣ Install frontend dependencies

```bash
npm install
```

### 3️⃣ Install backend dependencies

```bash
cd backend
npm install
```

### 4️⃣ Configure Environment Variables

Create a file inside the backend folder:

```
backend/config.env
```

Add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## ▶️ Run the Application

### Start Backend

```bash
npm run dev:node
```

### Start Frontend

```bash
npm start
```

Open:

```
http://localhost:4200
```

---

## 🔒 Environment Variables

| Variable  | Description               |
| --------- | ------------------------- |
| PORT      | Backend server port       |
| MONGO_URI | MongoDB connection string |

---

## 🚧 Future Enhancements

- User Authentication (JWT)
- Note Categories & Tags
- Real-time updates
- Deployment (Docker / AWS)
- Unit & Integration Testing
- Role-based access control

---

## 🧪 API Endpoints (Sample)

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/notes     | Get all notes |
| POST   | /api/notes     | Create note   |
| PUT    | /api/notes/:id | Update note   |
| DELETE | /api/notes/:id | Delete note   |

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Akash Joshi**  
Full Stack Developer  
Angular • Node.js • MongoDB

---

## ⭐ Show Your Support

If you like this project:

- ⭐ Star this repository
- 🍴 Fork it
- 🛠️ Contribute

---

> Built with clean architecture and a focus on scalability.
