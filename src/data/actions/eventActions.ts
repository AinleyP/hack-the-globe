import { AnyAction } from 'redux';

/* Imports from local files */
import { ADD_RESPONSIBLITY, SET_LOCATION } from './actionTypes';
import Event from '../types/event';
import Responsiblity from '../types/responsiblity';

/**
 * Actions should be as light weight as possible. No asynchronous processes should be started in actions.
 * This is why the data fetching was done prior to loading the data to the global store.
 *
 * "uploads" the data taken as an input into the datastore
 */
export interface EventAction extends AnyAction {
  type: string;
  payload: Event;
  location?: string;
  responsiblity?: Responsiblity;
}

export const setLocation = (data: Event, location: string): EventAction => ({
  type: SET_LOCATION,
  payload: data,
  location,
});

export const addResponsiblity = (data: Event, responsiblity: Responsiblity): EventAction => ({
  type: ADD_RESPONSIBLITY,
  payload: data,
  responsiblity,
});
