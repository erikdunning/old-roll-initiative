import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openDiceMenu } from '../../actions/app'
import { NavLink } from 'react-router-dom';
import { routePaths } from '../../views/App';

class DiceMenu extends Component {
  static propTypes = {
    diceMenuOpen: PropTypes.bool,
    dispatch: PropTypes.func
  }
  constructor(){
    super();
    this._getDiceMenuClasses = this._getDiceMenuClasses.bind(this);
  }
  _getDiceMenuClasses(){
    return 'DiceMenu' + ( this.props.diceMenuOpen ? ' DiceMenu--open' : '');
  }
  render() {
    return (
      <div className={this._getDiceMenuClasses()}>
        <div className="DiceMenu--shadow" onClick={this.props.openDiceMenu}></div>
        <div className="DiceMenu--menu">
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
          <NavLink
            activeClassName='LinkMenu-link--active'
            className='LinkMenu-link'
            to={ routePaths.LOGOUT }
          >
            Logout
          </NavLink>
        </div>
      </div>
    );
  }
}

/* Maps Redux State Members to Component State Values */
const mapStateToProps = (state) => {
  return {
    diceMenuOpen: state.app.get('diceMenuOpen')
  };
}
export default connect(mapStateToProps, { openDiceMenu })(DiceMenu);
