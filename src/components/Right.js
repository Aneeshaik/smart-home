import { useState, useEffect } from "react";
import calenderIcon from "../assets/images/calender-icon.svg"
import Calendar from "react-calendar";
import Weather from "./Weather";

const Right = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-us', {hour12: false}));
    const date = new Date().toLocaleDateString('en-us', {month: 'long', day: '2-digit', year: 'numeric'});
    const day = new Date().toLocaleDateString('en-us', {weekday: 'long'})
    const [hours, minutes] = time.split(':')
    const [showCalendar, setShowCalendar] = useState(false)
    const [location, setLocation] = useState({ lat: null, lon: null });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error(error.message);       
                }
            );
        } else {
            console.error( "Geolocation is not supported by your browser");
        }
    }, []);

    const handleMouseOver = () => {
        setShowCalendar(true);
    }
    const handleMouseLeave = () => {
        setShowCalendar(false);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-us', {hour12: false}));
        }, 1000);
        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);
    

    return (
        <div>
        <div className="backdrop-blur-3xl m-2 bg-white/20 rounded-3xl text-white">
            <div className="p-3">
                <h1 className="text-left">Alerts</h1>
            </div>
        </div>
        <div className="backdrop-blur-3xl m-2 bg-white/20 relative z-20 rounded-3xl text-white">
            <div className="p-3 flex justify-between">
                <div className="text-left">
                    <h1 className="font-semibold text-2xl"><span className="text-4xl">{hours}</span> : {minutes}</h1>
                    <h1><span className="text-3xl">{day}</span>, {date}</h1>
                </div>
                <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                    <img src={calenderIcon}  alt="calender" />
                    <div>
                    {showCalendar && (
                        <div className="shadow-xl shadow-black rounded-3xl absolute scale-75 ml-1 top-[-100px]">
                            <Calendar className="backdrop-blur-xl"/>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
        <Weather location={location}/>
        </div>
    )
}


export default Right;