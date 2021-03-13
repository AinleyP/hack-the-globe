export default interface Organization {
  id: string;
  name: string;
  foundingYear: string;
  address?: string;
  state: string;
  city: string;
  county: string;
  type: string;

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
