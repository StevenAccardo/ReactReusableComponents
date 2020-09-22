import React from 'react';
import small from '../assets/images/small.jpeg';
import large from '../assets/images/large.jpg';

const App = () => {
  return (
    <div className="app">
      <h1>Hello Universe</h1>
      <img src={small} alt=""/>
      <img src={large} alt=""/>
    </div>
  );
};

export default App;
