import { useState, useEffect } from "react";

const Right = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-us', {hour12: false}));
    const date = new Date().toLocaleDateString('en-us', {month: 'long', day: '2-digit'});
    const day = new Date().toLocaleDateString('en-us', {weekday: 'long'})
    const [hours, minutes] = time.split(':')
    useEffect(() => {
            const timer = setInterval(() => {
                setTime(new Date().toLocaleTimeString('en-us', {hour12: false}));
            }, 1000);
            return () => clearInterval(timer); // Cleanup the interval on component unmount
        }, []);

    return (
        <div className="backdrop-blur-3xl m-2 bg-white/20 rounded-3xl text-white">
            <div className="p-3">
                <h1 className="font-semibold text-2xl">{hours} : {minutes}</h1>
                <h1>{day}, {date}</h1>
            </div>
        </div>
    )
}


export default Right;