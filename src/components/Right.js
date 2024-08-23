import { useState, useEffect, useCallback } from "react";

const Right = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-us', {hour12: false}));
    const date = new Date().toLocaleDateString('en-us', {month: 'long', day: '2-digit', year: 'numeric'});
    const day = new Date().toLocaleDateString('en-us', {weekday: 'long'})
    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(true);
    const [todayWeather, setTodayWeather] = useState(null);
    const [upcomingWeather, setUpcomingWeather] = useState([]);
    const [hours, minutes] = time.split(':')
    
    useEffect(() => {
            const timer = setInterval(() => {
                setTime(new Date().toLocaleTimeString('en-us', {hour12: false}));
            }, 1000);
            return () => clearInterval(timer); // Cleanup the interval on component unmount
        }, []);
    useEffect(() => {
        const fetchData = async () => {
            const apiKey = process.env.REACT_APP_YOUR_API_KEY;
            console.log(apiKey); // Ensure this logs the correct API key
        
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${apiKey}&units=metric`);
                const weatherData = await response.json();
                setWeatherData(weatherData);
                setLoading(false);
                // console.log(weatherData);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
        fetchData();
    },[])
    
    const getTodayForecast = useCallback(() => {
        const currentDate = new Date().toLocaleDateString('en-us', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
        
        const todayForecast = weatherData.list
            .filter((forecast) => {
                const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString('en-us', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                });
                return forecastDate === currentDate;
            })
            .reduce((closest, forecast) => {
                const forecastTime = new Date(forecast.dt * 1000).getTime();
                const currentTime = new Date().getTime();
                return Math.abs(forecastTime - currentTime) < Math.abs(closest.dt * 1000 - currentTime)
                    ? forecast
                    : closest;
            }, weatherData.list[0]);
            setTodayWeather(todayForecast)
    }, [weatherData.list]);
    
    // Function to get weather for the upcoming days at a specific time (e.g., 12:00 PM)
    const getUpcomingDaysForecasts = useCallback(() => {
        const currentDate = new Date().toLocaleDateString('en-us', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
    
        console.log('Current Date:', currentDate);
        console.log('Weather Data List:', weatherData.list);
    
        const upcomingDaysForecasts = weatherData.list
            .filter((forecast) => {
                const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString('en-us', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                });
                console.log('Forecast Date:', forecastDate);
                console.log(new Date(forecast.dt * 1000).getHours());
                
                return forecastDate !== currentDate && new Date(forecast.dt * 1000).getHours() === 11;
            })
            .slice(0, 4);
            
    
        console.log('Upcoming Days Forecasts:', upcomingDaysForecasts);
        setUpcomingWeather(upcomingDaysForecasts);
    }, [weatherData.list]);
    
    useEffect(() => {
        if(!loading){
            getTodayForecast();
            getUpcomingDaysForecasts();
        }
        
    },[loading, getTodayForecast, getUpcomingDaysForecasts])
    

    return loading ? null : (
        <div>
        <div className="backdrop-blur-3xl m-2 bg-white/20 rounded-3xl text-white">
            <div className="p-3">
                <h1 className="text-left">Alerts</h1>
            </div>
        </div>
        <div className="backdrop-blur-3xl m-2 bg-white/20 rounded-3xl text-left text-white">
            <div className="p-3">
                <h1 className="font-semibold text-2xl"><span className="text-4xl">{hours}</span> : {minutes}</h1>
                <h1><span className="text-3xl">{day}</span>, {date}</h1>
            </div>
        </div>
        <div className="weather-div backdrop-blur-3xl m-2 bg-white/20 rounded-3xl text-white">
            <div className="p-3 items-center">
                    <div>
                   {todayWeather && (
                        <div className="h-min">
                        <h1 className="text-xl text-left">Weather</h1>
                            <div className="flex justify-between items-center h-12">
                            <h1><span className="text-4xl">{todayWeather.main.temp.toFixed(0)}&deg;</span>C</h1>
                            <img src={`https://openweathermap.org/img/wn/${todayWeather.weather[0].icon}@2x.png`} alt="weather-icon"/>
                            </div>
                        </div>
                    )} 
                   
                   </div>
                   <div className="flex justify-between mt-2">
                        <h1 className="text-lg">Forecast</h1>
                        <h1 className="text-sm">Next 4 days</h1>
                   </div>
                   <div className="flex items-center">
                    {upcomingWeather.map((forecast, index) => (
                        <div key={index} className="bg-white/20 m-2 p-1 rounded-3xl forecast-item items-center">
                            <h1>{new Date(forecast.dt * 1000).toLocaleDateString('en-us', { weekday: 'short' })}</h1>
                            <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="weather-icon"/>
                            <p>{forecast.main.temp.toFixed(0)}&deg;C</p>
                        </div>
                    ))}
                </div>
                {/* <div className="items-center">
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather-icon" />
                </div> */}
            </div>
        </div>
        </div>
    )
}


export default Right;