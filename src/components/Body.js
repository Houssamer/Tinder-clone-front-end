import React, { useEffect, useState } from 'react';
import './Body.css';
import TinderCard from 'react-tinder-card';
import axios from '../axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Body() {
  const user = useSelector(selectUser);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
    axios
      .get(`/api/users_except_one/${user.id}`, config)
      .then((res) => {
        setPeople(res.data.users);
      })
      .catch((err) => {
        console.log(err);
        alert('You are having a problem please try again');
      });
  });

  function swipe(direction) {
    console.log('You swiped ' + direction);
  }
  function onCardLeftScreen(name) {
    console.log(`${name} left the screen`);
  }
  return (
    <div className="body">
      {people.map((person) => (
        <TinderCard
          onSwipe={swipe}
          preventSwipe={['up', 'down']}
          onCardLeftScreen={() => onCardLeftScreen(person.name)}
          key={person._id}
        >
          <div
            className="body__content"
            style={{ backgroundImage: `url(${person.imgURL})` }}
          >
            <h1 className="body__name">{person.name}</h1>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default Body;
