import React from 'react';
import BigButton from '../BigButton/BigButton';
import './Homepage.css';

class Homepage extends React.Component {
  render() {
    return (
      <>
        <h1 className="intro-title">Welcome to the DnD 5e Character Generator!</h1>
        <BigButton link="/create-character" title="Create a Character"></BigButton>
      </> 
    )
  }
}

export default Homepage;