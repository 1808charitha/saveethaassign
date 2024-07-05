

// import React, { useState, useEffect } from 'react';
// import artexhibition from '../../../assets/artexhibition.jpeg';
// import musicfest from '../../../assets/musicfest.jpeg';
// import sciencefair from '../../../assets/sciencefair.jpeg';
// import Sportsday from '../../../assets/Sportsday.jpeg';
// import techconference from '../../../assets/techconference.jpeg';
// import './EventComponent.css';

// const EventComponent = () => {
//   const [images, setImages] = useState([
//     artexhibition,
//     musicfest,
//     sciencefair,
//     Sportsday,
//     techconference
//   ]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images]); 

//   return (
//     <div className="event-component">
//       <h1>Events</h1>
//       <div className="image-slider">
//         <img src={images[currentIndex]} alt="Event" className="slider-image" />
//       </div>
//     </div>
//   );
// };

// export default EventComponent;


import React, { useState, useEffect } from 'react';
import './EventComponent.css'; // Import your CSS file for styling


import artexhibition from '../../../assets/artexhibition.jpeg';
import musicfest from '../../../assets/musicfest.jpeg';
import sciencefair from '../../../assets/sciencefair.jpeg';
import Sportsday from '../../../assets/Sportsday.jpeg';
import techconference from '../../../assets/techconference.jpeg';

const EventComponent = () => {
  const [events, setEvents] = useState([
    { image: artexhibition, description: "Art Exhibition" },
    { image: musicfest, description: "Music Festival" },
    { image: sciencefair, description: "Science Fair" },
    { image: Sportsday, description: "Sports Day" },
    { image: techconference, description: "Tech Conference" }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % events.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [events]);

  return (
    <div className="event-component">
      <h1>Events</h1>
      <div className="event-slider">
        <div className="image-container">
          <img src={events[currentIndex].image} alt={events[currentIndex].description} className="slider-image" />
          <div className="image-description">
            <p>{events[currentIndex].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventComponent;

