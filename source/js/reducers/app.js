import { Map } from 'immutable';
import * as types from '../actions/types'

const initialState = Map({
  diceMenuOpen: false
});

const actionsMap = {
  [types.OPEN_DICE_MENU]: (state, action) => {
    return state.merge({
      diceMenuOpen: true
    });
  },
  [types.CLOSE_DICE_MENU]: (state, action) => {
    return state.merge({
      diceMenuOpen: false
    });
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
