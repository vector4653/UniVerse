# 🏫 UniVerse – The Ultimate Campus Companion App

UniVerse is a full-stack campus ecosystem app designed for college students.  
It brings events, people, clubs, hostels, canteen menus, communities, and campus life into one connected platform.

This repository contains both the frontend and backend code in separate folders so teams can work independently and merge into `main` when stable.

---

## 🚀 Features (Planned & Ongoing)

### 🎉 Campus Events
- Students and clubs can post upcoming events
- Users can view all events in a clean feed
- RSVP & reminders (future)

### 👥 Campus Connect
- Chat with people inside your college
- Join interest-based communities
- Find classmates & friends

### 🍽️ Live Canteen Menu
- Daily updated food menu
- Price + availability
- Live updates (future)

### 🏠 Hostel Updates
- Notices and announcements
- Facility & maintenance alerts

### 🔐 Secure Login
- College email verification
- JWT / Session authentication (planned)

---

## 📂 Project Structure

```
universe/
│
├── frontend/        # React + TypeScript app
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/         # Node.js / Express backend
│   ├── src/
│   ├── package.json
│   └── ...
│
├── .gitignore
├── README.md
└── ...
```

---

## 🛠️ Tech Stack

### Frontend
- React + TypeScript
- Vite
- TailwindCSS (optional)
- React Router

### Backend
- Node.js + Express
- MongoDB/PostgreSQL (planned)
- JWT Auth
- REST API

---

## 📥 How to Setup the Project

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/<repo>.git
cd universe
```

---

## ⭐ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs on:
```
http://localhost:5173/
```

---

## ⭐ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Runs on:
```
http://localhost:3000/
```

---

## 🌿 Branch Workflow

- `main` → Final merged production code  
- `frontend` → All UI work  
- `backend` → All API/backend work  

### Developers should:

```bash
git checkout frontend   # UI team
git checkout backend    # API team
git pull                # always update before coding
```

---

## 🤝 Contributing

1. Choose correct branch (`frontend` or `backend`)
2. Create a feature branch
3. Commit changes
4. Push the branch
5. Open a Pull Request into frontend/backend  
6. Stable versions get merged into `main`

---

## 🧹 Important Notes

- `node_modules` is **ignored** via `.gitignore`
- Everyone must run `npm install` inside frontend & backend
- Teams should avoid editing folders outside their scope

---

## 📌 License
MIT — Open for contribution.

