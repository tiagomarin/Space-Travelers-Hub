const MyMissions = (props) => {
  const { myMission } = props;
  return <li>{myMission.mission_name}</li>;
};

export default MyMissions;
