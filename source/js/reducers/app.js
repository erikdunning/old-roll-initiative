import { Map } from 'immutable'
import * as types from '../actions/types'
import api from '../api'

const initialState = Map({
  diceMenuOpen: false
});

const actionsMap = {
  [types.LOGOUT_USER]: (state, action) => {
    return state.merge({});
  },
  [types.LOGIN_USER]: (state, action) => {
    return state.merge({
      googleUser: null
    });
  },
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
