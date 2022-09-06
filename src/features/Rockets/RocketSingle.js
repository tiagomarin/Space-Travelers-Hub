import React from 'react';
import { useDispatch } from 'react-redux';
import { rocketReserve, rocketUndoReserve } from './rocketsSlice';

const RocketSingle = (props) => {
  const dispatch = useDispatch();
  const { rocketData } = props

  const reserveClickHandler = () => {
    const reserved = rocketData.reserved
    if (reserved === false) {
      dispatch(rocketReserve(rocketData))
    } else {
      dispatch(rocketUndoReserve(rocketData))
    }
  }

  return (
    <div className="rocket-item">
      <img src={rocketData.flickr_images[0]} alt={rocketData.rocket_name} />
      <div className="rocket-info">
        <h2>{rocketData.rocket_name}</h2>
        <p>{rocketData.description}</p>
        <button type="button" aria-label="Increment value" onClick={reserveClickHandler}>
          Reserve Rocket
        </button>
      </div>
    </div>
  )
}
export default RocketSingle;