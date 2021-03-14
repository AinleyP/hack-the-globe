/* Imports from packages */
import Event from '../data/types/event';
import Responsibility, { Resource } from '../data/types/responsiblity';
import Tags from './Tags';

interface Props {
  event: Event,
  onClick: (event: Event) => void
}

const ActivistProfileEventCard = (props: Props): JSX.Element => {
  return <div className="profile-event-card" onClick={() => { props.onClick(props.event) }}>
    <img src={props.event.image} />
    <div className="profile-event-card-text">
      <h1>{props.event.name}</h1>
      <p>{props.event.description ? `${props.event.description.substring(0, 75)}...` : ""}</p>
      <Tags tags={props.event.responsiblities ? props.event.responsiblities.map((responsibility: Responsibility) => responsibility.name) : []} />
    </div>
  </div>
};

export default ActivistProfileEventCard;
