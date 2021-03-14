import Event from '../types/event';
import { Resource } from '../types/responsiblity';

const events: Array<Event> = [
  {
    id: '0',
    image:
      'https://www.kalw.org/sites/kalw/files/styles/x_large/public/202102/210212182902-chinatown-protest-san-francisco-file-2020-exlarge-169.jpg',
    name: '#StopAAPIHate Protest',
    description:
      'Hundreds of Chinatown residents in San Francisco will take to the streets to protest against racism, on March 23, 2020.',
    location: 'SAN FRANCISCO',
    responsiblities: [
      {
        name: Resource.funding,
        status: 'filled',
      },
      {
        name: Resource.outreach,
        status: 'unfilled',
      },
    ],
  },
  {
    id: '1',
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/210227180805-restricted-02-anti-asian-hate-rally-new-york-0227-exlarge-169.jpg',
    name: 'Rally Against Anti-Asian Hate',
    description:
      'The rally will be held to protest a wave of attacks on Asian Americans, including a large number of elderly people. The stabbing of a 36-year-old Asian American man in New York City. Similar incidents are being reported across the nation.',
    location: 'NEW YORK',
    responsiblities: [
      {
        name: Resource.funding,
        status: 'unfilled',
      },
      {
        name: Resource.personnel,
        status: 'unfilled',
      },
      {
        name: Resource.police,
        status: 'filled',
      },
    ],
  },
  {
    id: '2',
    image: 'https://msmagazine.com/wp-content/uploads/2021/02/Incremental-Growth-Is-Not-Equal-Representation-1.jpg',
    name: 'Rally Against Anti-Asian Hate Crimes & Racism',
    description:
      'An approximately two-hour rally to raise awareness of rising violence against the Asian Pacific Islander community was held at Los Angeles State Historic Park adjacent to Chinatown.',
    location: 'LOS ANGELES',
    responsiblities: [
      {
        name: Resource.sound,
        status: 'filled',
      },
      {
        name: Resource.training,
        status: 'filled',
      },
      {
        name: Resource.legal,
        status: 'filled',
      },
    ],
  },
];

export default events;
