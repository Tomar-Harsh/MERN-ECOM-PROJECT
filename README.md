# MERN ECOM PROJECT

A full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features
- User registration, login, and logout
- Product listing
- Shopping cart
- Protected routes (cart, checkout)
- Responsive Zen-inspired UI

## Live Demo
- **Frontend:** [Your Frontend Link](https://your-frontend-deployment-link.com)
- **Backend:** [Backend API](https://mern-ecom-project-r5rk.onrender.com)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB (local or cloud)

### 1. Clone the Repository
```bash
git clone https://github.com/Tomar-Harsh/MERN-ECOM-PROJECT.git
cd MERN-ECOM-PROJECT
```

### 2. Backend Setup
```bash
cd backend
npm install
```

#### Create a `.env` file in `backend/`:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000
```

#### Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../client
npm install
```

#### Create a `.env` file in `client/`:
```
VITE_API_BASE_URL=https://mern-ecom-project-r5rk.onrender.com/api/v1
```

#### Start the frontend dev server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deployment
- The backend is deployed on Render: [Backend API](https://mern-ecom-project-r5rk.onrender.com)
- The frontend can be deployed on Vercel, Netlify, or any static hosting provider.

## Folder Structure
```
MERN ECOM PROJECT/
  backend/    # Express + MongoDB API
  client/     # React frontend (Vite)
```

## License
This project is for educational/demo purposes. 