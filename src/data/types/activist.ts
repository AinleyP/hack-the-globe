import Event from './event';

export default interface Activist {
  id: number;
  name: string;
  image: string;
  events: Array<Event>;
}
