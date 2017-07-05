import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RollContainer from './RollContainer';
import { openDiceMenu } from '../../actions/app'
import rollInitiativeImg from '../../../assets/img/roll-initiative.svg';

@connect(state => ({
  diceMenuOpen: state.app.get('diceMenuOpen'),
}))
export default class DiceMenu extends Component {
  static propTypes = {
    diceMenuOpen: PropTypes.bool,
    // from react-redux connect
    dispatch: PropTypes.func
  }
  constructor(){
    super();
    this.toggleDiceMenu = this.toggleDiceMenu.bind(this);
    this._getDiceMenuClasses = this._getDiceMenuClasses.bind(this);
  }
  toggleDiceMenu(){
    const { dispatch } = this.props;
    dispatch(openDiceMenu());
  }
  _getDiceMenuClasses(){
    return 'DiceMenu' + ( this.props.diceMenuOpen ? ' DiceMenu--open' : '');
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
