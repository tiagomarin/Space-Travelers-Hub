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
        <RocketSingle key={rocket.id} rocketData={rocket} />
      ))}
    </ul>
  )
}
export default Rockets;