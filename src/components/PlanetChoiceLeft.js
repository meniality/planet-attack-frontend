import React, { Component } from 'react'




class PlanetChoiceLeft extends Component {

  handleClick = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target.parentNode)
    this.props.setChoicesLeft(formData.get('planetId'), formData.get('modifierId'))
  }

  render(props){
    return (
      <div id ="planet-choice-left">
        <h2>Player One</h2>
        <h4>Select Your Planet</h4>
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


export default PlanetChoiceLeft