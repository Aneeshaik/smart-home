import { useState, useEffect } from "react";

const Right = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-us', {hour12: false}));
    const date = new Date().toLocaleDateString('en-us', {month: 'long', day: '2-digit', year: 'numeric'});
    const day = new Date().toLocaleDateString('en-us', {weekday: 'long'})
    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(true);
    const [hours, minutes] = time.split(':')
    useEffect(() => {
            const timer = setInterval(() => {
                setTime(new Date().toLocaleTimeString('en-us', {hour12: false}));
            }, 1000);
            return () => clearInterval(timer); // Cleanup the interval on component unmount
        }, []);
    useEffect(() => {
        fetchData();
    },[])
    
    const fetchData = async () => {
        const apiKey = process.env.REACT_APP_YOUR_API_KEY;
        console.log(apiKey); // Ensure this logs the correct API key
    
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}&units=metric`);
            const weatherData = await response.json();
            setWeatherData(weatherData);
            setLoading(false);
            console.log(weatherData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };
    
    

    return loading ? null : (
        <div>
        <div className="backdrop-blur-3xl m-2 bg-white/20 rounded-3xl text-white">
            <div className="p-3">
                <h1 className="font-semibold text-2xl">{hours} : {minutes}</h1>
                <h1>{day}, {date}</h1>
            </div>
        </div>
        <div className="backdrop-blur-3xl m-2 bg-white/20 rounded-3xl text-white">
            <div className="text-left p-3 justify-between flex items-center">
                <div className="flex flex-col items-left justify-between">
                <h1 className="text-xl">Weather</h1>
                <div className="flex items-baseline">
                    <h1 className="text-4xl">{weatherData.main.temp}&deg;</h1>
                    <h1 className="">{weatherData.weather[0].description}</h1>
                </div>
                </div>
                <div className="items-center">
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather-icon" />
                </div>
            </div>
        </div>
        </div>
    )
}


export default Right;