import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as appActions from '../../actions/app'
import rollInitiativeImg from '../../../assets/img/roll-initiative.svg';

class LinkMenu extends Component {
  static propTypes = {
    // from react-redux connect
    dispatch: PropTypes.func
  }
  constructor(){
    super();
  }
  render() {
    return (
      <div className='LinkMenu'>
        <img
          className="LinkMenu-die-image"
          src={ rollInitiativeImg }
          alt='Roll Initiative Logo'
          onClick={this.props.openDiceMenu}
        />
        <span className='LinkMenu-title'>Roll Initiative</span>
      </div>
    );
  }
}

export default connect(null, {...appActions})(LinkMenu);
