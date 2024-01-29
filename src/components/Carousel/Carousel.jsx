import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = () => {
  // Fetch all images from the folder dynamically
  const imageContext = require.context('./CarouselImages', false, /\.(jpg|jpeg|png|gif|svg|JPG)$/);
  const images = imageContext.keys().map(imageContext);

  return (
    <Carousel>
       {images.map((image, index) => (
        <div key={index}>
          <img src={image.default} alt={`${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
