import './MyRockets.css';

const MyRockets = (props) => {
  const { myRockets } = props;
  return <li>{myRockets.rocket_name}</li>;
};

export default MyRockets;
