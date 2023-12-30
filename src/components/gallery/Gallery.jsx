import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import "./Gallery.css"
function Gallery() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      const result = (oldIndex + 1) % people.length;
      return result;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      const result = (oldIndex - 1 + people.length) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        const result = (oldIndex + 1) % people.length;
        return result;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
         Gallery <span>/</span>گالری
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image,type,video } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          if (type === 'img') {
            return  <article className={`article ${position}`} key={id}>
            <img src={image}  className='person-img' />
           
          
          </article>;
          } else if (type === 'video') {
            return (
              <article className={`article ${position}`} key={id}>
            
             <video  controls className='person-img'>
                <source src={video} type="video/mp4" />
                
              </video>
            
            </article>
              
            );
          }
           
        
        })}
      
      </div>  <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
    </section>
  );
}

export default Gallery;
