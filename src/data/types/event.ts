import Responsiblity from './responsiblity';

export default interface Event {
  id: string;
  image: string;
  name: string;
  location: string;
  responsiblities: Array<Responsiblity>;
  description: string;
  supportingTags?: Array<string>;
}
