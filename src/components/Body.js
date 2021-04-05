import React, { useState } from 'react';
import './Body.css';
import TinderCard from 'react-tinder-card';

function Body() {
  const [people, setPeople] = useState([
    {
      name: 'riad',
      imgUrl:
        'https://i.gaw.to/content/photos/40/01/400118_2020_Ford_Mustang.jpg',
    },
    {
      name: 'oussama',
      imgUrl:
        'https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/31281/original.jpg',
    },
  ]);

  function swipe(direction) {
    console.log('You swiped ' + direction);
  }
  function onCardLeftScreen(name) {
    console.log(`${name} left the screen`);
  }
  return (
    <div className="body">
      {people.map((person, index) => (
        <TinderCard
          onSwipe={swipe}
          preventSwipe={['up', 'down']}
          onCardLeftScreen={() => onCardLeftScreen(person.name)}
        >
          <div
            className="body__content"
            style={{ backgroundImage: `url(${person.imgUrl})` }}
            key={index}
          >
            <h1 className="body__name">{person.name}</h1>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default Body;
