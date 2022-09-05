import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { reserve } from './rocketsSlice';

const RocketSingle = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        aria-label="Increment value"
        // onClick={() => dispatch(reserve())}
      >
        Reserve a Rocket
      </button>
    </div>
  )
}
export default RocketSingle;