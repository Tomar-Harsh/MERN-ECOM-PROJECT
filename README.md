# MERN ECOM PROJECT 🚀

> **Author: Harsh Tomar**

Welcome to the ultimate beginner-friendly, quirky, and fully-featured MERN E-Commerce project! This repo is your one-stop shop for learning how to build a full-stack app with MongoDB, Express, React, and Node.js. Brought to you by **Harsh Tomar** (yes, that's me!).

---

## 🌟 What’s Inside?

### Backend (Node.js + Express + MongoDB)

- **Add Products:** `POST /products` (fields: name, price, imageUrl)
- **List Products:** `GET /products`
- **Add to Cart:** `POST /cart`
- **View Cart:** `GET /cart`
- **Remove from Cart:** `DELETE /cart/:productId`
- **Bonus:** JWT-based dummy authentication with hardcoded users, and each user gets their own cart (thanks, JWT!).

### Frontend (React.js)
- **View all products** (shop till you drop!)
- **Add product to cart** (because one is never enough)
- **View cart with total amount** (math done for you)
- **Remove product from cart** (regret-proof shopping)
- **Register, Login, Logout** (because security is cool)

---

## 🛠️ How I (Harsh Tomar) Built This

- **MongoDB Atlas** for the database (cloudy with a chance of data!)
- **Mongoose** for schema modeling (no more wild west data)
- **React functional components & hooks** (`useState`, `useEffect`) for a modern, snappy UI
- **Backend & frontend run on separate ports** (no port fights here)
- **Zen-inspired UI** for a premium, minimalist shopping experience
- **All requirements & bonus features?** You bet, all checked off by Harsh Tomar!

---

## 🚦 Quick Start (by Harsh Tomar)

### 1. Clone the Repo
```bash
git clone https://github.com/Tomar-Harsh/MERN-ECOM-PROJECT.git
cd MERN-ECOM-PROJECT
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in `backend/`:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000
```
Start the backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../client
npm install
```
Create a `.env` file in `client/`:
```
VITE_API_BASE_URL=https://mern-ecom-project-r5rk.onrender.com/api/v1
```
Start the frontend:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) and enjoy!

---

## 🌍 Live Demo
- **Frontend:** [Your Frontend Link](https://your-frontend-deployment-link.com)
- **Backend:** [Backend API](https://mern-ecom-project-r5rk.onrender.com)
- **GitHub:** [Repo by Harsh Tomar](https://github.com/Tomar-Harsh/MERN-ECOM-PROJECT)

---

## 📦 Folder Structure
```
MERN ECOM PROJECT/
  backend/    # Express + MongoDB API (by Harsh Tomar)
  client/     # React frontend (by Harsh Tomar)
```

---

## 💡 Why This Project?
This was a big learning curve for me (**Harsh Tomar**), and I hope it helps you too! Whether you’re a beginner or just want to see how a real-world MERN stack app is built, you’re in the right place.

---

## 🧑‍💻 Author
**Harsh Tomar**  
[GitHub](https://github.com/Tomar-Harsh)

---

## 📝 License
This project is for educational/demo purposes. Built with ❤️ by Harsh Tomar. 