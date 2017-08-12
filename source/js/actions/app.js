
/* Load source/js/api/index.js to provide access to API functions.
Generally more useful for Redux Reducers rather than Action Creators, but actions
can be loaded with arbitrary information. */
import api from 'api';
import * as types from './types'

/* Action Creators */
export function openDiceMenu(){
  return {
    type: types.OPEN_DICE_MENU
  }; 
}
export function closeDiceMenu(){
  return {
    type: types.CLOSE_DICE_MENU
  };
}
