import organizations from './sample_data/organizations';
import Organization from './types/organization';
import { Resource } from './types/responsiblity';

const suggestOrgs = (location: string, resourcesRequired: Array<Resource>) => {
  const orgs = organizations.filter((org) => org.city === location);
  return orgs.sort((a, b) => calculateCompatibility(resourcesRequired, b) - calculateCompatibility(resourcesRequired, a));
};

const calculateCompatibility = (resourcesRequired: Array<Resource>, org: Organization) => {
  return org.resourcesOffered
    ? (100 * resourcesRequired.filter((resource: Resource) => org.resourcesOffered?.includes(resource)).length) / resourcesRequired.length -
        org.resourcesOffered?.length
    : 0;
};

export default suggestOrgs;
