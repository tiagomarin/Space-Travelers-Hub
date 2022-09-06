import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketSingle from './RocketSingle';
import { getRockets } from './rocketsSlice';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  });

  return (
    <ul className="rockets-list">
      {rockets.map((rocket) => (
        <RocketSingle
          key={rocket.id}
          rocket={rocket}
          // image={rocket.flickr_images[0]}
          // name={rocket.rocket_name}
          // description={rocket.description}
          // reserved={rocket.reserved}
        />
      ))}
    </ul>
  );
};
export default Rockets;
