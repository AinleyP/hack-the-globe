/* Imports from local files */
import { ADD_MATCHED_ORG, ADD_SUGGESTED_ORG, ADD_ORG, ACCEPT_REQUEST_FROM_ORG, SEND_REQUEST_TO_ORG } from "../actions/actionTypes";
import Organization from '../types/organization'
import RelationshipStatus from '../types/relationshipStatus'
import { OrganizationsAction } from '../actions/'

export interface OrganzationsState {
  data: Array<Organization>
}

const defaultState: OrganzationsState = {
  data: []
};

/**
 * switch statement that filters on the action type to determine how to change the data in the store.
 * these replacements should be immutable.
 */
export default (state = defaultState, action: OrganizationsAction): OrganzationsState => {
  let stateCopy = {
    data: state.data.map((org: Organization) => org)
  }

  switch (action.type) {
    // directly sets the global data to the payload as specified in the action
    case ADD_ORG:
      stateCopy.data.push(action.payload)
      return {
        ...state,
        data: stateCopy.data
      };
    case ADD_MATCHED_ORG:
      return {
        ...state

      };
    case ADD_SUGGESTED_ORG:
      return {
        ...state
      };
    case ACCEPT_REQUEST_FROM_ORG:
      // Move org from requested to matched
      return {
        ...state,
        data: stateCopy.data.map((org: Organization) => {
          if (org.id === action.payload.id) {
            org.status = RelationshipStatus.matched
          }
          return org
        })
      };
    case SEND_REQUEST_TO_ORG:
      // Move org from suggested to pending
      return {
        ...state,
        data: stateCopy.data.map((org: Organization) => {
          if (org.id === action.payload.id) {
            org.status = RelationshipStatus.pending
          }
          return org
        })
      };
    default:
      return state;
  }
};
