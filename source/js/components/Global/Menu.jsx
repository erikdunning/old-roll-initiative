import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routePaths } from '../../views/App';
import rollInitiativeImg from '../../../assets/img/roll-initiative.svg';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        <div className='Menu-logo'>
          <img
            src={ rollInitiativeImg }
            alt='Work & Co logo'
          />
        </div>
        <div className='Menu-links'>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            exact
            to={ routePaths.DASHBOARD }
          >
            Home
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routePaths.ABOUT }
          >
            About
          </NavLink>
        </div>
      </div>
    );
  }
}
