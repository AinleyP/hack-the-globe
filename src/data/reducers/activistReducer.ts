/* Imports from local files */
import Activist from '../types/activist'
import Event from '../types/event'
import { ActivistAction } from '../actions/'
import sampleActivist from '../sample_data/activist'
import { EDIT_EVENT } from '../actions/actionTypes'

export interface ActivistState {
  data: Activist
}

const defaultState: ActivistState = {
  data: sampleActivist
};

/**
 * switch statement that filters on the action type to determine how to change the data in the store.
 * these replacements should be immutable.
 */
export default (state = defaultState, action: ActivistAction): ActivistState => {
  let stateCopy = state

  switch (action.type) {

    case EDIT_EVENT:
      const newEvents = []
      
      stateCopy.data.events.forEach((event: Event) => {
        if(event.id !== (action.payload as Event).id){
          newEvents.push(event)
        }
      })

      newEvents.unshift(action.payload as Event)
      stateCopy.data.events = newEvents
      return stateCopy
    default:
      return state;
  }
};
