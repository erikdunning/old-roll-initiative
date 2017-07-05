import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { } from 'actions/app';
import Icon from 'components/Global/Icon';

@connect(state => ({
}))
export default class Dashboard extends Component {
  static propTypes = {
    // from react-redux connect
    dispatch: PropTypes.func,
  }
  constructor() {
    super();
  }
  render() {
    return (
      <div className='Dashboard'>
        <hr />
      </div>
    );
  }
}
