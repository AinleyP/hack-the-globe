/* Imports from local files */
import Activist from '../types/activist'
import { ActivistAction } from '../actions/'
import sampleActivist from '../sample_data/activist'

export interface ActivistState {
  data: Activist
}

const defaultState: ActivistState = {
  data:sampleActivist
};

/**
 * switch statement that filters on the action type to determine how to change the data in the store.
 * these replacements should be immutable.
 */
export default (state = defaultState, action: ActivistAction): ActivistState => {
  switch (action.type) {
    default:
      return state;
  }
};
