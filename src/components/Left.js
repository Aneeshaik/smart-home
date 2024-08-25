import Time from "./Time"
import { useState, useEffect } from "react";
import Weather from "./Weather";

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
        <div className="">
            <Time />
            <Weather location={location} />
        </div>
    )
}

export default Left