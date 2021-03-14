import Event from '../types/event'
import { Resource } from '../types/responsiblity'

const events: Array<Event> = [
  {
    id: '0',
    image: 'https://source.unsplash.com/Evo4wmtRaPI',
    name: 'Anti Asian Hate Crime Protest',
    description: "During his first week in office, President Joe Biden signed an executive action essentially banning the use of such language within the federal government.But, with Democrats now in control of both chambers of Congress, lawmakers and activists are calling for more attention and resources devoted to the issue.California congresswoman Judy Chu, chair of the Asian Pacific American Caucus, called the recent incidents \"a crisis point\" for the community.",
    location: 'NEW YORK',
    responsiblities: [{
      name: Resource.funding,
      status: 'filled'
    }],
  },
  {
    id: '1',
    image: 'https://source.unsplash.com/Evo4wmtRaPI',
    name: 'Anti Asian Hate Crime Protest',
    description: "During his first week in office, President Joe Biden signed an executive action essentially banning the use of such language within the federal government.But, with Democrats now in control of both chambers of Congress, lawmakers and activists are calling for more attention and resources devoted to the issue.California congresswoman Judy Chu, chair of the Asian Pacific American Caucus, called the recent incidents \"a crisis point\" for the community.",
    location: 'NEW YORK',
    responsiblities: [
      {
        name: Resource.funding,
        status: 'filled'
      },
      {
        name: Resource.outreach,
        status: 'filled'
      },
      {
        name: Resource.police,
        status: 'filled'
      },
    ],
  },
  {
    id: '2',
    image: 'https://source.unsplash.com/Evo4wmtRaPI',
    name: 'Anti Asian Hate Crime Protest',
    description: "During his first week in office, President Joe Biden signed an executive action essentially banning the use of such language within the federal government.But, with Democrats now in control of both chambers of Congress, lawmakers and activists are calling for more attention and resources devoted to the issue.California congresswoman Judy Chu, chair of the Asian Pacific American Caucus, called the recent incidents \"a crisis point\" for the community.",
    location: 'NEW YORK',
    responsiblities: [
      {
        name: Resource.sound,
        status: 'filled'
      },
      {
        name: Resource.training,
        status: 'filled'
      },
      {
        name: Resource.police,
        status: 'filled'
      },
    ],
  },
]

export default events