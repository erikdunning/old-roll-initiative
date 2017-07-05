import { Map } from 'immutable';

import {
  OPEN_DICE_MENU
} from 'actions/app';

const initialState = Map({
  diceMenuOpen: false
});

const actionsMap = {
  [OPEN_DICE_MENU]: (state, action) => {
    return state.merge({
      diceMenuOpen: !state.get('diceMenuOpen')
    });
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
