import React, { useState, useEffect } from 'react';
import Navbar from '/home/mdhv/Documents/Hindalco/src/components/navbar/navbar.jsx';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isCTAOpen, setIsCTAOpen] = useState(false); // State for CTA popup

  const handleButtonClick = (category) => {
    const routeMap = {
      "Guest-House": "/guest-house",
      "Hotel": "/hotel",
    };

    const route = routeMap[category];

    if (route) {
      navigate(route);
    }
  };

  const handleCTAOpen = () => {
    setIsCTAOpen(true);
  };

  const handleCTAClose = () => {
    setIsCTAOpen(false);
    navigate('/guest-house');
  };

  useEffect(() => {
    setTimeout(() => setIsCTAOpen(true), 3000); // Open after 3 seconds
  }, []);


  return (
    <div>
      <Navbar />

      <section className="intro-section">
        <h2>A heartily welcome!</h2>
        <h2>Relax, recharge, and let us manage your stay!</h2>
      </section>

      <section className="featured-section">
        <h2>Offerings</h2>
        <button className="category-button" onClick={() => handleButtonClick("Guest-House")}>
          Guest-Houses
        </button>
        <button className="category-button" onClick={() => handleButtonClick("Hotel")}>
          Hotels
        </button>
      </section>

      {/* Call to action popup */}
      <div className={`call-to-action-popup ${isCTAOpen ? 'show' : ''}`}>
        <h2>Ready to take your stay?</h2>
        <button className="cta-button" onClick={handleCTAClose}>
          Book now
        </button>
      </div>
    </div>
  );
};

export default Home;
