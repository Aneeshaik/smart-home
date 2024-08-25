import { useState, useEffect } from "react";
import Weather from "./Weather";
import News from "./News";

const Right = () => {
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
    

    return (
        <div>
        <div className="backdrop-blur-3xl m-2 bg-white/20 rounded-3xl text-white">
            <div className="p-3">
                <h1 className="text-left">Alerts</h1>
            </div>
        </div>
        <Weather location={location}/>
        <News />
        </div>
    )
}


export default Right;