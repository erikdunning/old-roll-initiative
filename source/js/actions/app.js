
/* Load source/js/api/index.js to provide access to API functions.
Generally more useful for Redux Reducers rather than Action Creators, but actions
can be loaded with arbitrary information. */
import api from 'api';

/* Action Types */
export const OPEN_DICE_MENU = 'OPEN_DICE_MENU';

/* Action Creators */
export function openDiceMenu(){
  return {
    type: OPEN_DICE_MENU
  }; 
}
