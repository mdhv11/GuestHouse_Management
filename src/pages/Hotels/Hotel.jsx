import React, { useState } from 'react';
import Navbar from '/home/mdhv/Documents/Hindalco/src/components/navbar/navbar.jsx';
import Footer from "/home/mdhv/Documents/Hindalco/src/components/footer/Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Typography } from "@mui/material";
import "./hotel.css";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    { src: process.env.PUBLIC_URL + "/i1.jpg" },
    { src: process.env.PUBLIC_URL + "/i2.jpg" },
    { src: process.env.PUBLIC_URL + "/i3.jpg" },
    { src: process.env.PUBLIC_URL + "/i4.jpg" },
    { src: process.env.PUBLIC_URL + "/i5.jpg" },
    { src: process.env.PUBLIC_URL + "/i6.jpeg" },
  ];

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <>
      <div>
        <Navbar />
        <Container>
          {/* ... */}
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={photos[slideNumber].src}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <Button className="bookNow" variant="contained" color="primary">
              Reserve or Book Now!
            </Button>
            <Typography variant="h4" className="hotelTitle">
              Bright rooms in a modern hotel!!
            </Typography>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <Typography variant="body1">
                Gogte plaza, Belagavi, 591113
              </Typography>
            </div>
            <Typography variant="body2" className="hotelDistance">
              Off the Bangalore-Mumbai Highway and 1 km from Kakati Fort, this
              modern hotel with a relaxed vibe is 10 km from the Kamal Basadi
              temple and 11 km from the downtown Belgaum train station.
            </Typography>
          </div>
          <div className="hotelDetailsPrice">
            <Typography variant="h5">Excellent service!</Typography>
            <Typography variant="body2">
              11 km from the downtown Belgaum train station.
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>starting from INR 5000!</b>
            </Typography>
            <Button variant="contained" color="primary">
              Reserve or Book Now!
            </Button>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Hotel;
