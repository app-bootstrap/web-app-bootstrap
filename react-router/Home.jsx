import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  console.log('run home', props);
  const goFirst = () => {
    props.history.push('/first');
  };
  return (
    <div>
      <h1>home</h1>
      <div>
        <div onClick={goFirst}>go to first</div>
      </div>
      <div>
        <Link to="/second">go to second</Link>
      </div>
      <div>
        <Link to="/third">go to third</Link>
      </div>
    </div>
  );
};

export default Home;
