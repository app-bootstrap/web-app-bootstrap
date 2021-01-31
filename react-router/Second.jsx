import React from 'react';
import { Link } from 'react-router-dom';

const Second = () => {
  console.log('run second');
  return (
    <div>
      <h1>second</h1>
      <div>
        <Link to="/">go to home</Link>
      </div>
    </div>
  );
};

export default Second;
