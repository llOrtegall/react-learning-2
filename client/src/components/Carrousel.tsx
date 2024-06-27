import { Title } from '@tremor/react';
import { useState, useEffect } from 'react';

const images = ['1.webp', '2.webp', '3.webp'];

export const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div>
        <Title className='text-sm text-center'>InfoRed Te Cuenta ...</Title>
      </div>
      <div className='flex justify-center items-center relative w-full h-96'>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Carrousel Image ${index + 1}`}
            className={`absolute w-full h-full object-contain transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </>
  )
};