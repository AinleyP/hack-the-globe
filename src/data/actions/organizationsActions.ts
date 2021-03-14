import { AnyAction } from 'redux';

/* Imports from local files */
import { ADD_MATCHED_ORG, ADD_SUGGESTED_ORG, ADD_ORG, ACCEPT_REQUEST_FROM_ORG, SEND_REQUEST_TO_ORG, SUGGEST_ORGS } from './actionTypes';
import Organization from '../types/organization';
import { Resource } from '../types/responsiblity';

/**
 * Actions should be as light weight as possible. No asynchronous processes should be started in actions.
 * This is why the organization fetching was done prior to loading the organization to the global store.
 *
 * "uploads" the organization taken as an input into the organizationstore
 */
export interface OrganizationsAction extends AnyAction {
  type: string;
  payload: { organization: Organization; location?: string; resourcesRequired?: Array<Resource> };
}

export const addMatchedOrg = (organization: Organization): OrganizationsAction => ({
  type: ADD_MATCHED_ORG,
  payload: { organization },
});

export const addSuggestedOrg = (organization: Organization): OrganizationsAction => ({
  type: ADD_SUGGESTED_ORG,
  payload: { organization },
});

export const addOrg = (organization: Organization): OrganizationsAction => ({
  type: ADD_ORG,
  payload: { organization },
});

export const acceptRequestFromOrg = (organization: Organization): OrganizationsAction => ({
  type: ACCEPT_REQUEST_FROM_ORG,
  payload: { organization },
});

export const sendRequestToOrg = (organization: Organization): OrganizationsAction => ({
  type: SEND_REQUEST_TO_ORG,
  payload: { organization },
});

export const suggestOrgs = (organization: Organization, location: string, resourcesRequired: Array<Resource>): OrganizationsAction => ({
  type: SUGGEST_ORGS,
  payload: { organization, location, resourcesRequired },
});
