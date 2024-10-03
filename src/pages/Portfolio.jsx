import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, title: 'Musikvideo - "Sommardrömmar"', type: 'Video', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
    { id: 2, title: 'Produktfotografering - Eco Fashion', type: 'Foto', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
    { id: 3, title: 'Reklamfilm - "Framtidens Teknik"', type: 'Video', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
    { id: 4, title: 'Porträttserie - "Stadens Hjältar"', type: 'Foto', image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
    { id: 5, title: 'Eventdokumentation - Kristianstad Kulturnatt', type: 'Video & Foto', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
    { id: 6, title: 'Naturfilm - "Skånska Pärlor"', type: 'Video', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-grayscale-900 mb-8">Vår Portfolio</h1>
      <Slider {...settings}>
        {portfolioItems.map((item) => (
          <div key={item.id} className="px-2">
            <div className="bg-grayscale-100 rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-grayscale-800 mb-2">{item.title}</h3>
                <p className="text-grayscale-600">{item.type}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;