import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  console.log('run home', props);
  return (
    <div>
      <h1>home</h1>
      <div>
        <div onClick={() => { props.history.push('/first'); }}>go to first</div>
      </div>
      <div>
        <Link to="/second">go to second</Link>
      </div>
    </div>
  );
};

export default Home;
