# 🎬 CineScope  
### Full-Stack Movie Discovery Platform

CineScope is a full-stack web application that allows users to discover trending movies, search titles, view detailed information, and save personalized favorites using secure authentication and cloud-synced storage.

🔗 **Live Demo:** https://cine-scope-peach.vercel.app/  
🔗 **GitHub Repository:** https://github.com/visheshmalik6/CineScope

---

## ✨ Features

- 🔐 Secure user authentication (Login & Register)
- 🎥 Browse popular and trending movies
- 🔍 Search movies by title
- 📄 Detailed movie modal (overview, rating, release year)
- 📺 “Where to Watch” (legal streaming platforms)
- ❤️ User-specific favorites
- ☁️ Cloud-synced data with Firestore
- 🔄 Persistent login sessions
- 🛡 Protected routes (authentication required)

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- React Router
- CSS

### Backend & Services
- Firebase Authentication
- Firebase Firestore
- TMDB API

### Deployment
- GitHub
- Vercel

---

## 🧠 Architecture Overview

- Authentication handled via **Firebase Auth**
- Favorites stored per user in **Firestore**
- Auth-gated application shell
- Context API used for global state management
- Environment variables used for secure API key handling
- Modular service-based API architecture

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- TMDB API Key

### Installation

```bash
git clone https://github.com/visheshmalik6/CineScope.git
cd CineScope
npm install
