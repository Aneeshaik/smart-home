import { useState, useEffect } from "react";

const Right = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    
    useEffect(() => {
            const timer = setInterval(() => {
                setTime(new Date().toLocaleTimeString());
            }, 1000);
            return () => clearInterval(timer); // Cleanup the interval on component unmount
        }, []);

    return (
        <div className="backdrop-blur-lg m-2 bg-white/20 rounded-3xl">
            <h1>{time}</h1>
        </div>
    )
}


export default Right;