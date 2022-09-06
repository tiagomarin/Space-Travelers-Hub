import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMission, joinMission, leaveMission } from './missionsReducer';
import './Missions.css';

const MissionsList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };
  const handleLeave = (id) => {
    dispatch(leaveMission(id));
  };

  if (missions.length === 0) {
    dispatch(fetchMission());
  }
  return (
    <div>
      <table className="missions-table">
        <thead>
          <tr className="table-head">
            <td> <h1 className="titles">Mission</h1></td>
            <td> <h1 className="info">Description</h1></td>
            <td> <h1 className="status">Status</h1></td>
          </tr>
        </thead>
        <tbody className="table-container">
{
  missions.map((mission) => (
    <tr key={mission.id} className="table-body">
      <td className="mission-title">{mission.name}</td>
      <td className="mission-description">{mission.description}</td>
      <td className="mission-status">
        <div>
        { mission.joined ? (
          <button type="button" className="not-member" onClick={() => handleLeave(mission.id)} disabled>Leave Mission</button>
        ) : (
          <button type="button" className="member" onClick={() => handleJoin(mission.id)} disabled>Join Mission</button>
        )}
        </div>
       <div>
        { mission.joined ? (
          <button type="button" className="leave-btn" onClick={() => handleLeave(mission.id)}>Leave Mission</button>
        ) : (
          <button type="button" className="join-btn" onClick={() => handleLeave(mission.id)}>Join Mission</button>
      ) }
        </div>
      </td>
    </tr>
  ))
}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsList;
