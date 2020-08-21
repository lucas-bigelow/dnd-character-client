import React from 'react';
import BigButton from '../BigButton/BigButton';

class FinishedCharacter extends React.Component {
  render() {
    return (
      <div className="group">
        <h2>Here's your completed character:</h2>
        <ul>
          <li>Race: {this.props.traits.race}</li>
          <li>Class: {this.props.traits.characterClass}</li>
          <li>Experience: {this.props.traits.experience}</li>
          <li>Strength: {this.props.traits.strength}</li>
          <li>Dexterity: {this.props.traits.dexterity}</li>
          <li>Constitution: {this.props.traits.constitution}</li>
        </ul>
        <h3>This will eventually generate a pdf that will be viewable in the browser.</h3>
        <BigButton link="/" title="Back to the Beginning" />
      </div>
    )
  }
}

export default FinishedCharacter;