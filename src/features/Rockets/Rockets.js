import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketSingle from './RocketSingle';

const Rockets = () => {
  return (
    <ul>
      <RocketSingle />
    </ul>
  )
}
export default Rockets;