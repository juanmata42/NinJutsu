import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // This line should be included
import './carouselStyles.scss';


const CarouselComponent = () => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(window.innerWidth < 768 ? 80 : 33);
  const imageContext = require.context('./CarouselImages', false, /\.(jpg|jpeg|png|gif|svg|JPG|PNG)$/);
  const images = imageContext.keys().map(key => imageContext(key));
  useEffect(() => {
    const handleResize = () => {
      setCenterSlidePercentage(window.innerWidth < 768 ? 100 : 33);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className='carousel-container'>
    <Carousel 
    autoPlay
    infiniteLoop 
    emulateTouch
    centerMode
    centerSlidePercentage={centerSlidePercentage}
    showThumbs={false} 
    showArrows={false} 
    showStatus={false} 
    showIndicators={false}>
      {images.map((image, index) => (
        <div key={index} className='carousel-img-container'>
          <img src={image} className='carousel-img' alt={`${index}`} />
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default CarouselComponent;
