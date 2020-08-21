import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterPage.css';

class CharacterPage extends React.Component {
  constructor(props) {
    super(props);

    // TODO: Keep track of these values in a context and store the state at the app level

    this.state = {
      race: '',
      characterClass: '',
      experience: 0,
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
      description: '',
      startingEquipment: [],
      armorClass: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({[name]: value});
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log('THIS HAPPENED');
    this.props.updateTraits(this.state);
  }
  
  // TODO: Turn this monolith into more components geez

  render() {
    return (
      <form>
        <h3>This is only a stub - needs refactoring but demonstrates basic functionality.</h3>
        <label>
          Race:
          <input className="item" type="text" name="race" value={this.state.race} onChange={this.handleInputChange}></input>
        </label>
        <label>
          Class:
          <input className="item" type="text" name="characterClass" value={this.state.characterClass} onChange={this.handleInputChange}></input>
        </label>
        <label>
          Experience:
          <input className="item" type="number" name="experience" value={this.state.experience} onChange={this.handleInputChange}></input>
        </label>
        <label>
          Strength:
          <input className="item" type="number" name="strength" value={this.state.strength} onChange={this.handleInputChange}></input>
        </label>
        <label>
          Dexterity:
          <input className="item" type="text" name="dexterity" value={this.state.dexterity} onChange={this.handleInputChange}></input>
        </label>
        <label>
          Constitution:
          <input className="item" type="text" name="constitution" value={this.state.constitution} onChange={this.handleInputChange}></input>
        </label>
        <button className="item" type="submit" onClick={this.handleSubmit}><Link to="/finished">Create Character</Link></button>
      </form>
    )
  }
};

export default CharacterPage;