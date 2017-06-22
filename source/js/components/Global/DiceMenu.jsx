import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routePaths } from '../../views/App';
import rollInitiativeImg from '../../../assets/img/roll-initiative.svg';

export default class Menu extends Component {
  render() {
    return (
      <div className='DiceMenu'>
        <NavLink
          activeClassName='Menu-link--active'
          className='Menu-link'
          exact
          to={ routePaths.DASHBOARD }
        >
          <img
            src={ rollInitiativeImg }
            alt='Roll Initiative Logo'
          />
        </NavLink>
      </div>
    );
  }
}
