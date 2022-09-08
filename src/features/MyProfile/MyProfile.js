import React from 'react';
import { useSelector } from 'react-redux';
import MyMissions from './MyMissions';
import MyRockets from './MyRockets';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((item) => item.joined === true);

  return (
    <div className="my-profile-wrap">
      <div>
        <h2>My Rockets</h2>
        <ul className="my-profile-list">
          {reservedRockets.map((item) => (
            <MyRockets
              key={item.rocket_id}
              rocketName={item.rocket_name}
            />
          ))}
        </ul>
      </div>
      <div>
        <h2>My Missions</h2>
        <ul className="my-profile-list">
          {joinedMissions.map((item) => (
            <MyMissions
              key={item.mission_id}
              missionName={item.mission_name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MyProfile;
