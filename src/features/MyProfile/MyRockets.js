import React from 'react';
import PropTypes from 'prop-types';

const MyRockets = (props) => {
  const { rocketName } = props;
  return <li className="my-profile-list-items">{rocketName}</li>;
};

MyRockets.defaultProps = {
  rocketName: 'You have no rockets',
};

MyRockets.propTypes = {
  rocketName: PropTypes.string,
};

export default MyRockets;
