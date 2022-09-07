import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, getMissions } from './missionSlice';
import  './Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  console.log(missions);
  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };

  if (missions.length === 0) {
    dispatch(getMissions());
  }

  return (
    <div className="container">
<table class="table table-striped table-hover table-responsive{-xl}">
  <thead>
    <tr>
      <th className="mission" scope="col">Mission</th>
      <th className="description" scope="col">Description</th>
      <th className="status" scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
{missions.map((e) => (
  <tr>
  <td className="mission-title">{ e.mission_name }</td>
  <td className="mission-info">{ e.description }</td>
  <td className="mission-status">
      <span className="status">{ e.joined ? 'ACTIVE MEMBER': 'NOT A MEMBER'}</span>
  </td>

  <td classname="join-mission">
      <button type="button"
      className="member"
       onClick={() => handleJoin(e.mission_id)}
       >
       { e.joined ? 'LEAVE MISSION': 'JOIN MISSION'}
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
