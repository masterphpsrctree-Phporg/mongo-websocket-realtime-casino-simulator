# mongo-websocket-realtime-casino-simulator
# Lunex AI Casino Simulator

A **Lunex-style real-time visitor/casino simulator** built with **React.js, Node.js, MongoDB, and WebSocket**.  
This project simulates visitors moving through a flow: **Visitor → Cloudflare → Server → Database** with live animations and AI-style visuals.

---

## 🌟 Features

- Real-time updates with **Socket.io**  
- Multiple visitors simulation  
- Animated flow diagram (Visitor → Cloudflare → Server → Database)  
- MongoDB Atlas integration for storing visitor logs  
- Cloudflare delay & error simulation (10% chance)  
- Lunex dark theme UI with neon highlights  

---

## 📂 Project Structure
---

## ⚡ Setup & Running Locally

### 1️⃣ Backend
```bash
cd server
npm install express cors mongoose socket.io
node server.js
