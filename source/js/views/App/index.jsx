import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from 'views/Dashboard';
import About from 'views/About';
import NotFound from 'views/NotFound';
import LinkMenu from 'components/Global/LinkMenu';
import DiceMenu from 'components/Global/DiceMenu';

const publicPath = '/';

export const routePaths = {
  DASHBOARD: publicPath,
  ENCOUNTERS: `${ publicPath }encounters`,
  CHARACTERS: `${ publicPath }characters`,
  PARTIES: `${ publicPath }parties`,
  CAMPAIGNS: `${ publicPath }campaigns`,
  ABOUT: `${ publicPath }about`,
  LOGOUT: `${ publicPath }logout`,
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='Page'>
            <LinkMenu />
            <div className="Content">
              <Switch>
                <Route exact path={ publicPath } component={ Dashboard } />
                <Route path={ routePaths.ABOUT } component={ About } />
                <Route path='*' component={ NotFound } />
              </Switch>
            </div>
          </div>
          <DiceMenu />
        </div>
      </BrowserRouter>
    );
  }
}
