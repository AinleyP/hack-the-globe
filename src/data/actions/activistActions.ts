import { AnyAction } from 'redux'

/* Imports from local files */
import Activist from '../types/activist'
import Event from '../types/event'
import { EDIT_EVENT } from './actionTypes'

/**
 * Actions should be as light weight as possible. No asynchronous processes should be started in actions.
 * This is why the data fetching was done prior to loading the data to the global store.
 *
 * "uploads" the data taken as an input into the datastore
 */
export interface ActivistAction extends AnyAction {
  type: string,
  payload: Activist | Event,
}

export const editEvent = (data: Event): ActivistAction => ({
  type: EDIT_EVENT,
  payload: data,
});
