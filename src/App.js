import React, {Component} from 'react';
import './App.css';
import PlanetChoiceLeft from './components/PlanetChoiceLeft'
import PlanetChoiceRight from './components/PlanetChoiceRight'
import FightButton from './components/FightButton'



class App extends Component {
  
  state= {
    planets: [],
    modifiers: [],
    leftPlanetChoice: 0,
    rightPlanetChoice: 0,
    leftModifierChoice: 0,
    rightModifierChoice: 0,
    winnerMessage: '',
    leftImage: '',
    rightImage:'',

  }

  componentDidMount(){
    fetch('http://localhost:3000/planets')
      .then(response => response.json())
      .then(response => this.setState({
        planets: response
      }))

    fetch('http://localhost:3000/modifiers')
      .then(response => response.json())
      .then (response => this.setState({
        modifiers: response
      }))
  }

  setChoicesLeft = (planetId, modifierId) => {
    this.setState({
      leftPlanetChoice: planetId,
      leftModifierChoice: modifierId
    })
  }

  setChoicesRight = (planetId, modifierId) => {
    this.setState({
      rightPlanetChoice: planetId,
      rightModifierChoice: modifierId
    })
  }

  setWinnerMessage = (message, leftURL, rightURL) => {
    this.setState({
      winnerMessage: message,
      leftImage: leftURL,
      rightImage: rightURL
    })
  }

  render(){
    return (
      <div className="App">
        <div id="planet-choices">
          <PlanetChoiceLeft planets={this.state.planets} modifiers = {this.state.modifiers} setChoicesLeft={this.setChoicesLeft}/>
          <PlanetChoiceRight planets={this.state.planets} modifiers = {this.state.modifiers} setChoicesRight={this.setChoicesRight}/>
        </div>
        <FightButton {...this.state} setWinnerMessage={this.setWinnerMessage}/>
        <div id="winnerDiv">
          <div id='imageDiv'>
            <img id = "left-planet" src={this.state.leftImage} alt =""/>
            <img id = "right-planet" src={this.state.rightImage} alt = ""/>
          </div>
          <h2>{this.state.winnerMessage}</h2>
        </div>
      </div>
    );
  }
}

export default App;
