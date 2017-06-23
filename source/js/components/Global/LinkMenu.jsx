import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routePaths } from '../../views/App';

export default class LinkMenu extends Component {
  render() {
    return (
      <div className='LinkMenu'>
        <span className='LinkMenu-title'>Roll Initiative</span>
        <NavLink
          activeClassName='LinkMenu-link--active'
          className='LinkMenu-link'
          exact
          to={ routePaths.DASHBOARD }
        >
          Home
        </NavLink>
        <NavLink
          activeClassName='LinkMenu-link--active'
          className='LinkMenu-link'
          to={ routePaths.ABOUT }
        >
          About
        </NavLink>
      </div>
    );
  }
}
