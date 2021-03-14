/* Imports from packages */
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { useState } from 'react';

import { editEvent } from '../data/actions/activistActions';
import Event from '../data/types/event';
import Responsibility, { Resource, stringToResource } from '../data/types/responsiblity';
import { RootState } from '../data/reducers';
import CloseIcon from '../assets/close-icon.svg';
import PenIcon from '../assets/pen.svg';
import SupportingTags from '../pages/SupportingTags';
import Tags from './Tags';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'; // If using WebPack and style-loader.
import { suggestOrgs } from '../data/actions/organizationsActions';
import organizations from '../data/sample_data/organizations';

interface DispatchProps {
  editEvent: typeof editEvent;
  suggestOrgs: typeof suggestOrgs;
}

//create your forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const EventModal = (props: Props): JSX.Element => {
  const [isEditingTags, setIsEditingTags] = useState(false)
  const [isEditingLocation, setIsEditingLocation] = useState(false)
  const [event, setEvent] = useState(props.event)
  const forceUpdate = useForceUpdate();

  const onClickViewDetails = () => {
    props.setModalVisibility(false);
  };

  const onTagsChange = (newResources: Array<string>, changedResources: Array<Resource>) => {
    let eventResponsibilities: Array<Responsibility> = event.responsiblities.map((resp) => resp);
    event.responsiblities.length = 0;

    newResources.forEach((resName: string) => {
      let found = false;
      const res = stringToResource(resName);

      eventResponsibilities.forEach((resp: Responsibility) => {
        if (resp.name == res) {
          found = true;
          event.responsiblities.push(resp);
        }
      });

      if (!found) {
        event.responsiblities.push({
          name: res,
          status: 'unfilled',
        });
      }
    })

    console.log(event)
    setEvent(event)
    props.editEvent(event)

    props.suggestOrgs(
      organizations[0],
      event.location,
      event.responsiblities.map((r: Responsibility) => r.name)
    );

    forceUpdate()
  }

  const onLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    event.location = e.currentTarget.value
    setEvent(event)
    props.editEvent(event)

    props.suggestOrgs(
      organizations[0],
      event.location,
      event.responsiblities.map((r: Responsibility) => r.name)
    );
    
    forceUpdate()
  }

  return <div>
    <div className="overlay"></div>
    <div className="event-modal">
      <div className="event-modal-close-icon">
        <button type="button" className="close" aria-label="Close" onClick={onClickViewDetails}><img src={CloseIcon} /></button>
      </div>
      <div className="event-modal-content">
        <div className="event-modal-title">
          <img src={event.image} />
          <div className="event-modal-title-section header-text">
            <h1>{event.name}</h1>
            <div className="event-modal-supporting-tags">
              <SupportingTags supportingTags={event.supportingTags ? event.supportingTags : []} />
            </div>
            <h3>Volunteers Needed</h3>
            <h3>Host: Jane Doe</h3>
            <h3>Event Site: facebook.com/protest-event</h3>
            <div className="event-modal-location">
              <h3>Location: </h3>
              {isEditingLocation ? <input type="text" value={event.location} onChange={onLocationChange} /> : <h3>{event.location}</h3>}
              <button onClick={() => { setIsEditingLocation(!isEditingLocation) }}>
                {isEditingLocation ? "Save" : <img src={PenIcon} />}
              </button>
            </div>
          </div>
        </div>
        <div className="event-modal-text">
          <div className="event-modal-title-section">
            <div className="event-modal-resources-required">
              <h2>Resources required</h2>
              <button onClick={() => { setIsEditingTags(!isEditingTags) }}>
                {isEditingTags ? "Save" : <img src={PenIcon} />}
              </button>
            </div>
          </div>
          {isEditingTags ?
            <TagsInput value={event.responsiblities.map((item) => item.name)} onChange={onTagsChange} />
            : <Tags tags={event.responsiblities.map((item) => item.name)} />
          }
          <div className="event-modal-title-section">
            <h2>Objectives</h2>
          </div>
          <p>Many communities are seeing a disturbing wave of anti-Asian violence in recent weeks, including robberies,
              burglaries and assaults targeting older Asian American and Pacific Islander (AAPI) individuals. In San
              Francisco, 84-year-old Thai American Vicha Ratanapakdee died from injuries after he was pushed to the
              sidewalk. In San Jose, Calif., a 64-year old Vietnamese American woman was robbed of $1,000 in cash. In
              New York, Noel Quintana, who is 61and Filipino American, was slashed in the face during a subway
              confrontation. And in Oakland, Calif., a 91-year-old man was shoved to the ground in a string of more than
              20 robberies and assaults reported to the city’s Chinatown community leaders ahead of the Lunar New Year.
              Let's do our part to stop this.</p>
          {/* <div className="modal-footer"> */}
          {/* <button type="button" className="organization-card-button" data-dismiss="modal">Close</button> */}
          {/* <button type="button" className="organization-card-button">Save changes</button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  </div>

};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return bindActionCreators(
    {
      // add other actions here
      editEvent,
      suggestOrgs,
    },
    dispatch
  );
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & {
  setModalVisibility: (isOpen: boolean) => void;
  event: Event;
};

export default connector(EventModal);
