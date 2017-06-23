import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { testAction, testAsync } from 'actions/app';
import Icon from 'components/Global/Icon';

/*
  <h2>Examples</h2>

  <h3>Synchronous action</h3>
  <div className='Example'>
    <p>Counter: { counter }</p>
    <button onClick={ this.handleTestButtonClick }>
      Increase
    </button>
  </div>

  <h3>Async action example</h3>
  <div className='Example'>
    { asyncData && <p>{ asyncData }</p> }
    { asyncLoading && <p>Loading...</p> }
    { asyncError && <p>Error: { asyncError }</p> }
    <button
      disabled={ asyncLoading }
      onClick={ this.handleAsyncButtonClick }
    >
      Get async data
    </button>
  </div>
*/

@connect(state => ({
  asyncData: state.app.get('asyncData'),
  asyncError: state.app.get('asyncError'),
  asyncLoading: state.app.get('asyncLoading'),
  counter: state.app.get('counter'),
}))
export default class Dashboard extends Component {
  static propTypes = {
    asyncData: PropTypes.string,
    asyncError: PropTypes.object,
    asyncLoading: PropTypes.bool,
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  constructor() {
    super();
  }

  handleAsyncButtonClick() {
    const { dispatch } = this.props;

    dispatch(testAsync());
  }

  handleTestButtonClick() {
    const { dispatch } = this.props;

    dispatch(testAction());
  }

  render() {
    const {
      asyncData,
      asyncError,
      asyncLoading,
      counter,
    } = this.props;

    return (
      <div className='Dashboard'>
        <hr />
      </div>
    );
  }
}
