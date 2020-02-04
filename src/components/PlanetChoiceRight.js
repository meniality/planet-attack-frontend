import React, { Component } from 'react'


class PlanetChoiceRight extends Component {

  handleClick = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target.parentNode)
    this.props.setChoicesRight(formData.get('planetId'), formData.get('modifierId'))
  }

  render(props){
    return (
      <div id ="planet-choice-right">
        <h2>Player Two</h2>
        <h4>Select Your Planet and Move Set</h4>
        <form>
          <select name="planetId">
            {this.props.planets.map(planet =>{
              return<option value ={planet.id}>{planet.name}</option>
            })}
          </select>
          <select name="modifierId">
            {this.props.modifiers.map(modifier =>{
              return<option value ={modifier.id}>{modifier.damage_modifier_name}</option>
            })}
          </select>
          <button onClick={this.handleClick} >Submit</button>
        </form>
      </div>
    )
  }
}


export default PlanetChoiceRight