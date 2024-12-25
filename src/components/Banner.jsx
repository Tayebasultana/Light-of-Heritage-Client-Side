import { useState } from 'react';
import './Banner.css';

import lalbagImage from '../assets/lalbag.png';
import mahastangharImage from '../assets/mahastanghar.png';
import sixtydomeImage from '../assets/document.png';
import ahsanManzilImage from '../assets/canon.png';

const Banner = () => {
  const [bannerData, setBannerData] = useState({
    image: lalbagImage,
    title: 'Explore Artifacts',
    description: 'Discover the wonders of ancient history.',
  });

  const cards = [
    {
      id: 1,
      title: 'Ancient Art',
      image: lalbagImage,
      description: 'Discover artworks around the world.',
    },
    {
      id: 2,
      title: 'Historical Relics',
      image: mahastangharImage,
      description: 'Explore the relics of past civilizations.',
    },
    {
      id: 3,
      title: 'Liberation War',
      image: sixtydomeImage,
      description: 'Bangladesh Liberation War of 1971',
    },
    {
      id: 4,
      title: 'Mughal Cannon',
      image: ahsanManzilImage,
      description: 'The  symbol of Bengals Mughal heritage.',
    },
  ];

  const handleCardClick = (card) => {
    setBannerData({
      image: card.image,
      title: card.title,
      description: card.description,
    });
  };

  return (
    <div className="banner-container">
      {/* Banner Image with lower opacity */}
      <div className="banner-image" style={{ backgroundImage: `url(${bannerData.image})` }}>
        <div className="banner-content">
          <h1>{bannerData.title}</h1>
          <p>{bannerData.description}</p>
        </div>
      </div>

      {/* 4 Cards displayed in 2 rows */}
      <div className="card-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card "
            onClick={() => handleCardClick(card)}
          >
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
