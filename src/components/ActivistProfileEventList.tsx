/* Imports from packages */
import Event from '../data/types/event'
import Responsibility, { Resource } from '../data/types/responsiblity'
import Tags from './Tags'
import ActivistProfileEventCard from './ActivistProfileEventCard'

interface Props {
  events: Array<Event>
}

const ActivistProfileEventList = (props: Props): JSX.Element => {
  const renderEventCards = () => {
    return props.events.map((event: Event) => <div key={event.id} className="profile-event-list-card"><ActivistProfileEventCard event={event} /></div>)
  }

  return <div className="profile-event-list">
    <div className="profile-event-list-header">
      <h2>Event</h2>
    </div>
    <div className="profile-event-list-content">
      {renderEventCards()}
    </div>
  </div>;
};

export default ActivistProfileEventList