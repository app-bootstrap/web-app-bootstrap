import React from 'react';
import { Link } from 'react-router-dom';

const First = () => {
  console.log('run first');
  return (
    <div>
      <h1>first</h1>
      <div>
        <Link to="/">go to home</Link>
      </div>
    </div>
  );
};

export default First;
