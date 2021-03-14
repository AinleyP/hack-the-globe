import RelationshipStatus from './relationshipStatus';
import { Resource } from './responsiblity';
import PointOfContact from './pointOfContact'

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
  compatibilityScore: number;

  bio?: string;
  supportingTags?: Array<string>;
  personalMessage?: string;
  resourcesOffered?: Array<Resource>;
  eventsHelped?: string;
  sponsorshipToDate?: string;
  website?: string;
  pointsOfContact?: Array<PointOfContact>;
  pastEvents?: Array<any>;
  testimonials?: Array<any>;
}
