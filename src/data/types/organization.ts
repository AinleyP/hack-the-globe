export enum OrganizationStatus {
  requested, // Organization has sent request to the activist
  pending,  // Organization which the activist has sent a request to
  suggested,
  matched, 
  noRelation
}

export default interface Organization {
  id: string;
  name: string;
  foundingYear: string;
  address?: string;
  state: string;
  city: string;
  county: string;
  type: string;
  status: OrganizationStatus;
  image: string;

  bio?: string;
  supportingTags?: Array<string>;
  personalMessage?: string;
  resourcesOffered?: Array<string>;
  eventsHelped?: string;
  sponsorshipToDate?: string;
  website?: string;
  pointsOfContact?: Array<any>;
  pastEvents?: Array<any>;
  testimonials?: Array<any>;
}
