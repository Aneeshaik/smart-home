import { useEffect, useState } from "react";

const News = () => {
    const [newsData, setNewsData] = useState([]);
    useEffect(() => {
        fetchData();
    },[])
    
    const fetchData = async() => {
        const response = await fetch('https://api.worldnewsapi.com/top-news?api-key=50997f96f19c44869fd0f927b59bfc5b&source-country=in&language=en');
        const jsonData = await response.json();
        setNewsData(jsonData);
    }

    return (
        <div>
            {console.log(newsData.top_news)}
        </div>
    )
}

export default News;