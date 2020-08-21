import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import CharacterPage from '../CharacterPage/CharacterPage';
import FinishedCharacter from '../FinishedCharacter/FinishedCharacter';
import './App.css';

class App extends React.Component {
  state = {
    race: 'Flimblarks',
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

  handleUpdateState = (newState) => {
    console.log(newState);
    this.setState({...newState});
  }
  
  render() {
    return (
      <div className="App">
        <Route
          exact
          path='/'
          component={Homepage}
        />
        <Route
          exact
          path='/create-character'>
            <CharacterPage updateTraits={this.handleUpdateState} />
        </Route>
        <Route
          exact
          path='/finished'>
            <FinishedCharacter traits={this.state} />
        </Route>
      </div>
    )
  }
}

export default App;
