import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as appActions from '../../actions/app';
import Icon from 'components/Global/Icon';

class Dashboard extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='Dashboard'>
        <div onClick={this.props.performGoogleAuth}>
          login link
        </div>
      </div>
    );
  }
}

export default connect(null, {...appActions})(Dashboard);