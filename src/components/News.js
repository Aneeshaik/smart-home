import { useEffect, useState } from "react";

const News = () => {
    const [newsData, setNewsData] = useState([]);
    useEffect(() => {
        fetchData();
    },[])
    
    const fetchData = async() => {
        const apiKey = process.env.REACT_APP_YOUR_WORLD_NEWS_API_KEY;
        console.log(apiKey);
        

        const response = await fetch(`https://api.worldnewsapi.com/top-news?api-key=${apiKey}&source-country=in&language=en`);
        const jsonData = await response.json();
        console.log(jsonData);
        
        // setNewsData(jsonData);
    }

    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="..." class="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            {console.log(newsData.top_news)}
        </div>
    )
}

export default News;