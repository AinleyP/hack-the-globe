/* Imports from local files */
import { ADD_RESPONSIBLITY, CLEAR_RESPONSIBILITIES, SET_LOCATION } from '../actions/actionTypes';
import Event from '../types/event';
import { EventAction } from '../actions/eventActions';

const defaultState: Event = {
  location: 'NEW YORK',
  responsiblities: [],
};

/**
 * switch statement that filters on the action type to determine how to change the data in the store.
 * these replacements should be immutable.
 */
const eventReducer = (state = defaultState, action: EventAction): Event => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.location!,
      };
    case ADD_RESPONSIBLITY:
      return {
        ...state,
        responsiblities: [...state.responsiblities, action.responsiblity!],
      };
    case CLEAR_RESPONSIBILITIES:
      return {
        ...state,
        responsiblities: [],
      };
    default:
      return state;
  }
};

export default eventReducer;
