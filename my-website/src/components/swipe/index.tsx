import React, { useEffect } from 'react';
import Swiper from 'swiper';

const SwiperComponent = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1560: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <h2>Slide 1</h2>
          <p>Slide 1 content</p>
        </div>
        <div className="swiper-slide">
          <h2>Slide 2</h2>
          <p>Slide 2 content</p>
        </div>
        <div className="swiper-slide">
          <h2>Slide 3</h2>
          <p>Slide 3 content</p>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SwiperComponent;