import React, { Component } from 'react'

class FightButton extends Component{

  displayWinner = () =>{
    console.log(this.props)
    let leftTotal=0
    let rightTotal=0
    const leftPlanet = this.props.planets.find(planet => planet.id === parseInt(this.props.leftPlanetChoice))
    const rightPlanet = this.props.planets.find(planet => planet.id === parseInt(this.props.rightPlanetChoice))
    const leftModifier = this.props.modifiers.find(modifier => modifier.id === parseInt(this.props.leftModifierChoice))
    const rightModifier = this.props.modifiers.find(modifier => modifier.id === parseInt(this.props.rightModifierChoice))

    leftTotal = leftPlanet.base_attack + leftModifier.damage_modifier
    rightTotal = rightPlanet.base_attack + rightModifier.damage_modifier

    if (leftTotal > rightTotal) {
      this.props.setWinnerMessage(`${leftPlanet.name} destroys ${rightPlanet.name} with a ${leftModifier.damage_modifier_name}!`)
    }
    else {
      this.props.setWinnerMessage(`${rightPlanet.name} destroys ${leftPlanet.name} with a ${rightModifier.damage_modifier_name}!`)

    }
    
  }

  render() {
    return (
      <div id="fight-button">
        <button id="the-real-button" onClick = {this.displayWinner}>FIGHT!</button>
      </div>
    )
  }
}

export default FightButton
