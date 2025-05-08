# 🧾 Recipe App

A simple fullstack recipe manager built with **React**, **Express**, **MongoDB**, and **JWT-based authentication**. Users can register, log in, add new recipes, and view all existing recipes.

---

## 🔧 Tech Stack

- **Frontend**: React, Axios, React Router DOM
- **Backend**: Express.js, MongoDB (via Mongoose), JWT for authentication
- **Database**: MongoDB (local or cloud with MongoDB Atlas)

---

## 📦 Folder Structure

```
recipe-app/
├── recipe-app-frontend/     # React app
├── recipe-app-backend/      # Express.js API
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd recipe-app-backend
```

### 2. Setup Backend

#### Install dependencies

```bash
npm install
```

#### Create a `.env` file

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

#### Start server

```bash
npm start
```

Server runs at `http://localhost:5000`

---

### 3. Setup Frontend

Open a new terminal:

```bash
cd recipe-app-frontend
npm install
npm start
```

Frontend runs at `http://localhost:3000`

---

## ✅ Features

- ✅ User signup/login (with JWT)
- ✅ Add new recipes (protected route)
- ✅ View all recipes
- ✅ Search/filter (basic)
- 🚧 Recipe details page (coming soon)

---

## 🔐 API Routes

### Auth

- `POST /api/auth/signup` – Create user
- `POST /api/auth/login` – Login user and get JWT

### Recipes

- `GET /api/recipes` – Public list of all recipes
- `POST /api/recipes` – Add new recipe (requires auth)

---

## 📄 License

MIT

---

## 🧠 Tips

- Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud hosting your database.
- Protect your `.env` file – don’t push it to GitHub.
- Frontend talks to backend via `http://localhost:5000`.