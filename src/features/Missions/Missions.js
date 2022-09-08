import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, getMissions } from './missionSlice';
import './Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };

  if (missions.length === 0) {
    dispatch(getMissions());
  }

  return (
    <div className="container">
      <table className="table table-striped table-hover table-responsive{-xl} table-bordered">
        <thead>
          <tr>
            <th className="mission" scope="col">Mission</th>
            <th className="description" scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((e) => (
            <tr key={e.mission_id} className="align-middle">
              <td className="mission-title align-top">{e.mission_name}</td>
              <td className="mission-info">{e.description}</td>
              <td className="mission-status">
                <div className={e.joined ? 'status active' : 'status'}>
                  {e.joined ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
                </div>
              </td>

              <td className="join-mission">
                <button
                  type="button"
                  className={e.joined ? 'member joined' : 'member'}
                  onClick={() => handleJoin(e.mission_id)}
                >
                  {e.joined ? 'LEAVE MISSION' : 'JOIN MISSION'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
