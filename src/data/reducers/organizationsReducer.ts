/* Imports from local files */
import { ADD_MATCHED_ORG, ADD_SUGGESTED_ORG, ADD_ORG } from "../actions/actionTypes";
import Organization from '../types/organization'
import { OrganizationsAction } from '../actions/'

export interface OrganzationsState {
  suggested: Array<Organization>,
  matched: Array<Organization>,
  all: Array<Organization>
}

const defaultState: OrganzationsState = {
  suggested: [],
  matched: [],
  all: []
};

/**
 * switch statement that filters on the action type to determine how to change the data in the store.
 * these replacements should be immutable.
 */
export default (state = defaultState, action: OrganizationsAction): OrganzationsState => {
  let new_orgs = state.all.map((org: Organization) => org);
  switch (action.type) {
    // directly sets the global data to the payload as specified in the action
    case ADD_ORG:
      new_orgs.push(action.payload)
      return {
        ...state,
        all: new_orgs
      };
    case ADD_MATCHED_ORG:
      return {
        ...state
        
      };
    case ADD_SUGGESTED_ORG:
      return {
        ...state
      };
    default:
      return state;
  }
};
