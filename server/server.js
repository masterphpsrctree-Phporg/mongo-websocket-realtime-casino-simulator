const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("./db");
const User = require("./models/User");
const Spin = require("./models/Spin");

const app = express();
app.use(express.json());
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// simulate slot spin
io.on("connection", socket => {
    console.log("New player connected:", socket.id);

    socket.on("spin", async ({ userId }) => {
        const result = Math.floor(Math.random()*100) < 50 ? "WIN" : "LOSE";
        const spin = await Spin.create({ user: userId, result });
        io.emit("spinUpdate", { userId, result });
    });

    socket.on("disconnect", () => console.log("Player disconnected"));
});

server.listen(5000, () => console.log("Casino server running on port 5000"));
