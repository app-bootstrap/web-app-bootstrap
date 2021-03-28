import React from 'react';
import { Link } from 'react-router-dom';

const Third = (props) => {
  console.log('run third');
  return (
    <div style={props.match ? null : { display: 'none' }}>
      <h1>third</h1>
      <div>
        <Link to="/">go to home</Link>
      </div>
    </div>
  );
};

export default Third;
