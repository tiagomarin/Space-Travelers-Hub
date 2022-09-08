import React from 'react';
import { useSelector } from 'react-redux';
import MyMissions from './MyMissions';
import MyRockets from './MyRockets';
import './MyProfile.css';

const MyProfile = () => {
  const myRockets = useSelector((state) => state.myRockets);
  const myMissions = useSelector((state) => state.myMissions);

  return (
    <div className="wrapper">
      <h2>My Rockets</h2>
      <ul className="my-profile-rockets-list">
        {myRockets.map((myRocket) => (
          <MyRockets
            key={myRocket.id}
            myRocket={myRocket}
          />
        ))}
      </ul>
      <h2>My Rockets</h2>
      <ul>
        <MyMissions />
        {myMissions.map((myMission) => (
          <MyRockets
            key={myMission.id}
            myMission={myMission}
          />
        ))}
      </ul>
    </div>
  );
};
export default MyProfile;
