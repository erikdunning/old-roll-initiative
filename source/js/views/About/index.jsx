import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='About'>
        <h1>About</h1>

        <p>
          Roll Initiaive is a simple app to help Dungeon Master's rotate through battle
          order and keep track of status effects.
        </p>
        <p>
          Visit documentation
          on <a href='https://github.com/erikdunning/roll-initiative'>GitHub</a>
        </p>
      </div>
    );
  }
}
