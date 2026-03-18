import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import SlotMachine from "./components/SlotMachine";

const socket = io("http://localhost:5000");

function App() {
    const [spins, setSpins] = useState([]);

    useEffect(() => {
        socket.on("spinUpdate", data => {
            setSpins(prev => [...prev, data]);
        });
        return () => socket.off();
    }, []);

    const handleSpin = (userId) => socket.emit("spin", { userId });

    return (
        <div>
            <h1>Casino Slot Simulation</h1>
            <SlotMachine spins={spins} onSpin={() => handleSpin(1)} />
        </div>
    );
}

export default App;
