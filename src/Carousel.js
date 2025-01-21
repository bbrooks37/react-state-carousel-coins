import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  function goForward() {
    setCurrCardIdx((currCardIdx + 1) % total); // Loop back to the beginning after the last image
  }

  function goBack() {
    setCurrCardIdx(currCardIdx > 0 ? currCardIdx - 1 : photos.length - 1); 
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i 
          className="bi bi-arrow-left-circle" 
          onClick={goBack} 
          style={{ display: currCardIdx === 0 ? 'none' : 'inline-block' }} 
        />
        <Card 
          caption={currCard.caption} 
          src={currCard.src} 
          currNum={currCardIdx + 1} 
          totalNum={total} 
        />
        <i 
          className="bi bi-arrow-right-circle" 
          onClick={goForward} 
          style={{ display: currCardIdx === photos.length - 1 ? 'none' : 'inline-block' }} 
        />
      </div>
    </div>
  );
}

export default Carousel;