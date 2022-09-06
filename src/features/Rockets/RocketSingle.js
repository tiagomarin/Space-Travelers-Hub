import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketReserve, rocketUndoReserve } from './rocketsSlice';

const RocketSingle = (props) => {
  const dispatch = useDispatch();
  // const {
  //   image, name, description, reserved,
  // } = props;
  const { rocket } = props
  const reserveClickHandler = () => {
    dispatch(rocketReserve({ rocket }));
    // if (reserved === false) {
    //   dispatch(rocketReserve(rocket));
    // } else {
    //   dispatch(rocketUndoReserve());
    // }
  };

  return (
    <div className="rocket-item">
      <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <div className="rocket-info">
        <h2>{rocket.rocket_name}</h2>
        <p>{rocket.description}</p>
        <button type="button" aria-label="Increment value" onClick={reserveClickHandler}>
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

// RocketSingle.defaultProps = {
//   image: '',
//   name: '',
//   description: '',
//   reserved: false,
// };

// RocketSingle.propTypes = {
//   image: PropTypes.string,
//   name: PropTypes.string,
//   description: PropTypes.string,
//   reserved: PropTypes.bool,
// };
export default RocketSingle;
