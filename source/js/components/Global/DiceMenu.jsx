import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as appActions from '../../actions/app'
import { NavLink } from 'react-router-dom';
import { routePaths } from '../../views/App';

class DiceMenu extends Component {
  constructor(){
    super();
    this.getDiceMenuClasses = this.getDiceMenuClasses.bind(this);
  }
  getDiceMenuClasses(){
    return 'DiceMenu' + ( this.props.diceMenuOpen ? ' DiceMenu--open' : '');
  }
  renderNavLink(label, to, exact = true){
    return (
      <NavLink
        onClick={this.props.closeDiceMenu}
        activeClassName='LinkMenu-link--active'
        className='LinkMenu-link'
        exact={exact}
        to={to}
      >
        {label}
      </NavLink>
    )
  }
  render() {
    return (
      <div className={this.getDiceMenuClasses()}>
        <div className="DiceMenu--shadow" onClick={this.props.closeDiceMenu}></div>
        <div className="DiceMenu--menu">
          {this.renderNavLink('Home', routePaths.DASHBOARD, true)}
          {this.renderNavLink('About', routePaths.ABOUT)}
          {this.renderNavLink('Logout', routePaths.LOGOUT)}
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
export default connect(mapStateToProps, {...appActions}, null, {pure: false})(DiceMenu);
