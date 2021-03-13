/* Imports from packages */
import Event from '../data/types/event'
import Responsibility, { Resource } from '../data/types/responsiblity'
import Tags from './Tags'

interface Props {
  event: Event
}

const ProfileEventCard = (props: Props): JSX.Element => {
  return <div className="profile-event-card">
    <img src={props.event.image} />
    <div className="profile-event-card-text">
      <h1>{props.event.name}</h1>
      <p>{props.event.description ? `${props.event.description.substring(0, 100)}...` : ""}</p>
      <Tags tags={props.event.responsiblities ? props.event.responsiblities.map((responsibility: Responsibility) => responsibility.name) : []} />
    </div>
  </div>;
};

export default ProfileEventCard
