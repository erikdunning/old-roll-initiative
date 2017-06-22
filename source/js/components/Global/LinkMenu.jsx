import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routePaths } from '../../views/App';

export default class Menu extends Component {
  render() {
    return (
      <div className='LinkMenu'>
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
    );
  }
}
