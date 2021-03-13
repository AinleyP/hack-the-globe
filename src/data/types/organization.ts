import RelationshipStatus from './relationshipStatus'
import { Resource } from './responsiblity'

export default interface Organization {
  id: string;
  name: string;
  foundingYear: string;
  address?: string;
  state: string;
  city: string;
  county: string;
  type: string;
  status: RelationshipStatus;
  image: string;

  bio?: string;
  supportingTags?: Array<string>;
  personalMessage?: string;
  resourcesOffered?: Array<Resource>;
  eventsHelped?: string;
  sponsorshipToDate?: string;
  website?: string;
  pointsOfContact?: Array<any>;
  pastEvents?: Array<any>;
  testimonials?: Array<any>;
}
