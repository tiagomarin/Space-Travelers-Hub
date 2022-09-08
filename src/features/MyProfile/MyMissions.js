import React from 'react';
import PropTypes from 'prop-types';

const MyMissions = (props) => {
  const { missionName } = props;
  return <li>{missionName}</li>;
};

MyMissions.defaultProps = {
  missionName: 'You have no missions',
};

MyMissions.propTypes = {
  missionName: PropTypes.string,
};

export default MyMissions;
