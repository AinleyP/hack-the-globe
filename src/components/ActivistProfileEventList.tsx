/* Imports from packages */
import Event from '../data/types/event';

import ActivistProfileEventCard from './ActivistProfileEventCard';
import { suggestOrgs } from '../data/actions';
import organizations from '../data/sample_data/organizations';
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

interface DispatchProps {
  suggestOrgs: typeof suggestOrgs;
}

const ActivistProfileEventList = (props: Props): JSX.Element => {
  const onClickEvent = (event: Event) => {
    props.setModalVisibility(true)
    props.setSelectedEvent(event)
  }

  const renderEventCards = () => {
    return props.events.map((event: Event, idx: number) => (
      <button
        key={event.id}
        className={"profile-event-list-card"}
        onClick={() => {
          console.log(event);
          props.suggestOrgs(
            organizations[0],
            event.location,
            event.responsiblities.map((r) => r.name)
          );
        }}
      >
        <ActivistProfileEventCard event={event} onClick={onClickEvent} selected={idx === 0}/>
      </button>
    ));
  };

  return (
    <div className="profile-event-list">
      <div className="profile-event-list-header">
        <h2>Event</h2>
      </div>
      <div className="profile-event-list-content">{renderEventCards()}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return bindActionCreators(
    {
      suggestOrgs,
    },
    dispatch
  );
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & {
  events: Array<Event>,
  setModalVisibility: (isOpen: boolean) => void,
  setSelectedEvent: (event: Event) => void
};

export default connector(ActivistProfileEventList);
