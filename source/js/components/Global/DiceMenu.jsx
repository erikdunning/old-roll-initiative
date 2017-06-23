import React, { Component } from 'react';
import RollContainer from './RollContainer'
import rollInitiativeImg from '../../../assets/img/roll-initiative.svg';

export default class DiceMenu extends Component {
  render() {
    return (
      <div className='DiceMenu'>
        <img
          src={ rollInitiativeImg }
          alt='Roll Initiative Logo'
        />
        <RollContainer/>
      </div>
    );
  }
}
