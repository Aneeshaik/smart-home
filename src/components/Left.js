import Time from "./Time"
import { useState, useEffect } from "react";
import Weather from "./Weather";
import News from "./News";

const Left = () => {
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
        <div className="flex flex-col h-full box-border">
            <div className="box-border">
                <Time />
            </div>
            <div className="box-border overflow-auto">
                <News />
            </div>
            <div className="box-border backdrop-blur-3xl bg-white/20 rounded-3xl overflow-auto">
                <Weather location={location} />
            </div>
        </div>
    )
}

export default Left