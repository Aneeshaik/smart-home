import { useState, useEffect } from "react";
const Body = () => {
        const [time, setTime] = useState(new Date().toLocaleTimeString());
    
        useEffect(() => {
            const timer = setInterval(() => {
                setTime(new Date().toLocaleTimeString());
            }, 1000);
            return () => clearInterval(timer); // Cleanup the interval on component unmount
        }, []);
    return(
        <div className="flex items-center justify-center min-h-screen">
            <div className="backdrop-blur-lg bg-white/20 w-2/3 p-5 rounded-3xl flex justify-between">
                <h1 className="text-left">Welcome Anees!</h1>
                <div className="backdrop-blur-lg bg-white/20 w-min p-4 rounded-3xl">
                    <h1>{time}</h1>
                </div>
            </div>
        </div>
    )
}

export default Body;