import React, {Component} from 'react';
import './App.css';
import PlanetChoiceLeft from './components/PlanetChoiceLeft'
import PlanetChoiceRight from './components/PlanetChoiceRight'



class App extends Component {
  
  state= {
    planets: [],
    leftPlanetChoice: 0,
    rightPlanetChoice: 0,
  }

  componentDidMount(){
    fetch('http://localhost:3000/planets')
    .then(response => response.json())
    .then(response => this.setState({
     planets: response
    }))
  }

  setPlanetLeft = (id) => {
    this.setState({
      leftPlanetChoice: id
    })
  }

  setPlanetRight = (id) => {
    this.setState({
      rightPlanetChoice: id
    })
    console.log(this.state.rightPlanetChoice)
  }

  render(){
    return (
      <div className="App">
        <div id="planet-choices">
          <PlanetChoiceLeft planets={this.state.planets} setPlanetLeft={this.setPlanetLeft}/>
          <PlanetChoiceRight planets={this.state.planets} setPlanetRight={this.setPlanetRight}/>
        </div>
      </div>
    );
  }
}

export default App;
