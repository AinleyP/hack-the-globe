import { AnyAction } from 'redux'

/* Imports from local files */
import { ADD_MATCHED_ORG, ADD_SUGGESTED_ORG, ADD_ORG } from "./actionTypes";
import Organization from '../types/organization'

/**
 * Actions should be as light weight as possible. No asynchronous processes should be started in actions.
 * This is why the data fetching was done prior to loading the data to the global store.
 *
 * "uploads" the data taken as an input into the datastore
 */
export interface OrganizationsAction extends AnyAction{
  type: string,
  payload: Organization,
  
}

export const addMatchedOrg = (data: Organization): OrganizationsAction => ({
  type: ADD_MATCHED_ORG,
  payload: data,
});

export const addSuggestedOrg = (data: Organization): OrganizationsAction => ({
  type: ADD_SUGGESTED_ORG,
  payload: data,
});

export const addOrg = (data: Organization): OrganizationsAction => ({
  type: ADD_ORG,
  payload: data,
});
