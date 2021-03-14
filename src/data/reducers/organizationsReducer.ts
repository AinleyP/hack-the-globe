/* Imports from local files */
import { ADD_MATCHED_ORG, ADD_SUGGESTED_ORG, ADD_ORG, ACCEPT_REQUEST_FROM_ORG, SEND_REQUEST_TO_ORG, SUGGEST_ORGS } from '../actions/actionTypes';
import Organization from '../types/organization';
import RelationshipStatus from '../types/relationshipStatus';
import { OrganizationsAction } from '../actions/';
import { Resource } from '../types/responsiblity';

export interface OrganzationsState {
  data: Array<Organization>;
}

const defaultState: OrganzationsState = {
  data: [],
};

/**
 * switch statement that filters on the action type to determine how to change the data in the store.
 * these replacements should be immutable.
 */
const organizationReducer = (state = defaultState, action: OrganizationsAction): OrganzationsState => {
  let stateCopy = {
    data: state.data.map((org: Organization) => org),
  };

  switch (action.type) {
    // directly sets the global data to the payload as specified in the action
    case ADD_ORG:
      stateCopy.data.push(action.payload.organization);
      return {
        ...state,
        data: stateCopy.data,
      };
    case ADD_MATCHED_ORG:
      return {
        ...state,
      };
    case ADD_SUGGESTED_ORG:
      return {
        ...state,
      };
    case ACCEPT_REQUEST_FROM_ORG:
      // Move org from requested to matched
      return {
        ...state,
        data: stateCopy.data.map((org: Organization) => {
          if (org.id === action.payload.organization.id) {
            org.status = RelationshipStatus.matched;
          }
          return org;
        }),
      };
    case SEND_REQUEST_TO_ORG:
      // Move org from suggested to pending
      return {
        ...state,
        data: stateCopy.data.map((org: Organization) => {
          if (org.id === action.payload.organization.id) {
            org.status = RelationshipStatus.pending;
          }
          return org;
        }),
      };
    case SUGGEST_ORGS:
      // Set compatibilityScore of all orgs and sort in desc order
      return {
        ...state,
        data: stateCopy.data
          .map((org: Organization) => {
            let score = org.city === action.payload.location ? 100 : 0;

            score +=
              org.resourcesOffered && action.payload.resourcesRequired
                ? (100 * action.payload.resourcesRequired.filter((resource: Resource) => org.resourcesOffered?.includes(resource)).length) /
                    action.payload.resourcesRequired.length -
                  org.resourcesOffered?.length
                : 0;

            org.compatibilityScore = score;
            return org;
          })
          .sort((a, b) => b.compatibilityScore - a.compatibilityScore),
      };
    default:
      return state;
  }
};

export default organizationReducer;
