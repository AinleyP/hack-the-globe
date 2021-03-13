/* Imports from local files */
import { ADD_RESPONSIBLITY, CLEAR_RESPONSIBILITIES, SET_LOCATION } from '../actions/actionTypes';
import Event from '../types/event';
import { EventAction } from '../actions/eventActions';

const defaultState: Event = {
  id: '0',
  image: 'https://source.unsplash.com/Evo4wmtRaPI',
  name: 'Anti Asian Hate Crime Protest',
  description: "During his first week in office, President Joe Biden signed an executive action essentially banning the use of such language within the federal government.But, with Democrats now in control of both chambers of Congress, lawmakers and activists are calling for more attention and resources devoted to the issue.California congresswoman Judy Chu, chair of the Asian Pacific American Caucus, called the recent incidents \"a crisis point\" for the community.",
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
