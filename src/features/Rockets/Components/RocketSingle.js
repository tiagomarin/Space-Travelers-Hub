import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketReserve } from '../rocketsSlice';
import ReservedBadge from './ReservedBadge';

const RocketSingle = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;

  return (
    <div className="rocket-item">
      <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <div className="rocket-info">
        <h2>{rocket.rocket_name}</h2>
        {rocket.reserved ? <ReservedBadge /> : <span className="badge-place" />}
        <p>{rocket.description}</p>
        <button
          className={rocket.reserved ? 'cancel-reservation' : 'reserve'}
          type="button"
          aria-label="Increment value"
          onClick={() => dispatch(rocketReserve(rocket.rocket_id))}
        >
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
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
