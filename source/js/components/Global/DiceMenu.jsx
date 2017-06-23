import React, { Component } from 'react';
import RollContainer from './RollContainer'
import rollInitiativeImg from '../../../assets/img/roll-initiative.svg';

export default class DiceMenu extends Component {
  constructor(){
    super();
    this.state = {
      diceMenuOpen: false
    };
    this.toggleDiceMenu = this.toggleDiceMenu.bind(this);
    this._getDiceMenuClasses = this._getDiceMenuClasses.bind(this);
  }
  toggleDiceMenu(){
    this.setState({
      diceMenuOpen: !this.state.diceMenuOpen
    });
  }
  _getDiceMenuClasses(){
    return 'DiceMenu' + ( this.state.diceMenuOpen ? ' DiceMenu--open' : '');
  }
  render() {
    return (
      <div className={this._getDiceMenuClasses()}>
        <img
          className="DiceMenu-toggle-image"
          src={ rollInitiativeImg }
          alt='Roll Initiative Logo'
          onClick={this.toggleDiceMenu}
        />
        <RollContainer/>
      </div>
    );
  }
}
