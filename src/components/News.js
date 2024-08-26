// import { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import NewsImage from '../assets/images/news-image.jpeg';

const News = () => {
    // const [newsData, setNewsData] = useState([]);
    // useEffect(() => {
    //     fetchData();
    // },[])
    
    // const fetchData = async() => {
    //     const apiKey = process.env.REACT_APP_YOUR_WORLD_NEWS_API_KEY;
    //     console.log(apiKey);
        

    //     const response = await fetch(`https://api.worldnewsapi.com/top-news?api-key=${apiKey}&source-country=in&language=en`);
    //     const jsonData = await response.json();
    //     console.log(jsonData);
        
    //     // setNewsData(jsonData);
    // }

  return (
    // <div className="backdrop-blur-3xl m-2 bg-white/20 items-center rounded-3xl">
    // <Carousel>
    //   <Carousel.Item interval={1000}>
    //   <div className='h-[150px] w-full rounded-3xl'>
    //   <img className="absolute inset-0 object-cover w-full h-full rounded-3xl" src={NewsImage} alt='news-image' />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //     </div>
    //   </Carousel.Item>
    //   <Carousel.Item interval={500}>
    //   <div className='h-[150px] w-full rounded-3xl'>
    //   <img className="absolute inset-0 object-cover w-full h-full rounded-3xl" src={NewsImage} alt='news-image' />
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //     </div>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //   <div className='h-[150px] w-full rounded-3xl'>
    //   <img className="absolute inset-0 object-cover w-full h-full rounded-3xl" src={NewsImage} alt='news-image' />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //     </div>
    //   </Carousel.Item>
    // </Carousel>
    // </div>

<div className="backdrop-blur-3xl m-2 bg-white/20 rounded-3xl flex justify-center items-center">
  <Carousel className="w-full" controls={false} indicators={false}>
    <Carousel.Item interval={1000}>
      <div className="relative w-full h-[150px] rounded-3xl">
        <img
          src={NewsImage}
          alt="news-image"
          className="w-full h-[150px] object-cover rounded-3xl"
        />
        <div className="absolute inset-x-0 bottom-0 text-white p-2 rounded-3xl text-left">
          <h3 className='text-xl'>First slide label</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item interval={2*1000}>
      <div className="relative w-full h-[150px] rounded-3xl">
        <img
          src={NewsImage}
          alt="news-image"
          className="w-full h-[150px] object-cover rounded-3xl"
        />
        <div className="absolute inset-x-0 bottom-0 text-white p-2 rounded-3xl text-left">
          <h3 className='text-xl'>Second slide label</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item interval={2*1000}>
      <div className="relative w-full h-[150px] rounded-3xl">
        <img
          src={NewsImage}
          alt="news-image"
          className="w-full h-[150px] object-cover rounded-3xl"
        />
        <div className="absolute inset-x-0 bottom-0 text-white p-2 rounded-3xl text-left">
          <h3 className='text-xl'>Third slide label</h3>
          {/* <p className='leading-tight'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
</div>



  );
}

export default News;