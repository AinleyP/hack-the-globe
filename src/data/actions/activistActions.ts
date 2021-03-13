import { AnyAction } from 'redux'

/* Imports from local files */
import Activist from '../types/activist'

/**
 * Actions should be as light weight as possible. No asynchronous processes should be started in actions.
 * This is why the data fetching was done prior to loading the data to the global store.
 *
 * "uploads" the data taken as an input into the datastore
 */
export interface ActivistAction extends AnyAction{
  type: string,
  payload: Activist, 
}
