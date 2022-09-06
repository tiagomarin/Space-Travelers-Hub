import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketReserve } from './rocketsSlice';

const RocketSingle = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;

  // const {
  //   id,
  //   image,
  //   name,
  //   description,
  //   reserved,
  // } = props;
  const reserveClickHandler = () => {
    dispatch(rocketReserve(rocket.rocket_id));
  };

  return (
    <div className="rocket-item">
      <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <div className="rocket-info">
        <h2>{rocket.rocket_name}</h2>
        <p>{rocket.description}</p>
        <button type="button" aria-label="Increment value" onClick={reserveClickHandler}>
          {rocket.reserved ? 'yes' : 'no'}
        </button>
      </div>
    </div>
  );
};

RocketSingle.propTypes = {
  rocket: PropTypes.shape(
    {
      rocket_id: PropTypes.string,
      rocket_name: PropTypes.string,
      description: PropTypes.string,
      reserved: PropTypes.bool,
      flickr_images: PropTypes.arrayOf(PropTypes.string),
    },
  ).isRequired,
};

export default RocketSingle;
