/* Imports from packages */
import { bindActionCreators, Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { useState } from "react";

import { editEvent } from '../data/actions/activistActions'
import Event from '../data/types/event'
import Responsibility, { Resource, stringToResource } from '../data/types/responsiblity'
import { RootState } from '../data/reducers'
import CloseIcon from '../assets/close-icon.svg'
import PenIcon from '../assets/pen.svg'
import SupportingTags from '../pages/SupportingTags'
import Tags from "./Tags";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

interface DispatchProps {
  editEvent: typeof editEvent,
}

//create your forceUpdate hook
function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const EventModal = (props: Props): JSX.Element => {
  const [isEditing, setIsEditing] = useState(false)
  const [event, setEvent] = useState(props.event)
  const forceUpdate = useForceUpdate();

  const onClickViewDetails = () => {
    props.setModalVisibility(false)
  }

  const onTagsChange = (newResources: Array<string>, changedResources: Array<Resource>) => {
    let eventResponsibilities: Array<Responsibility> = event.responsiblities.map((resp) => resp)
    event.responsiblities.length = 0

    newResources.forEach((resName: string) => {
      let found = false;
      const res = stringToResource(resName)

      eventResponsibilities.forEach((resp: Responsibility) => {
        if (resp.name == res) {
          found = true;
          event.responsiblities.push(resp)
        }
      })

      if (!found) {
        event.responsiblities.push({
          name: res,
          status: 'unfilled'
        })
      }
    })

    console.log(event)
    setEvent(event)
    props.editEvent(event)

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
            <h3>Location: San Francisco, California, U.S.</h3>
          </div>
        </div>
        <div className="event-modal-text">
          <div className="event-modal-title-section">
            <div className="event-modal-resources-required">
              <h2>Resources required</h2>
              <button onClick={() => { setIsEditing(!isEditing) }}>
                {isEditing ? "Save" : <img src={PenIcon} />}
              </button>
            </div>
          </div>
          {isEditing ?
            <TagsInput value={event.responsiblities.map((item) => item.name)} onChange={onTagsChange} />
            : <Tags tags={event.responsiblities.map((item) => item.name)} />
          }
          <div className="event-modal-title-section">
            <h2>Objectives</h2>
          </div>
          <p>APCF was founded in 1990 by API community leaders in response to the need for alternative funding for Los Angeles-based nonprofit organizations serving API communities. Prior to its incorporation, less than 0.3% of all local foundation funds went to API agencies, according to a 1988 study by A3PCON (Asian Pacific Policy & Planning Council). In 1986, the United Way of Greater Los Angeles funded only five organizations serving APIs. To raise funds for community organizations serving API communities, APCF initiated employee giving campaigns at various workplaces, including private companies, federal agencies, state agencies, county agencies, city agencies, and nonprofit organizations. In the past decade, APCF has diversified its fundraising efforts by developing other avenues for giving. With the growth of donor-advised funds, giving circles, grant making, scholarship funds, and capacity building initiatives, APCF has been able to cultivate philanthropy among APIs while providing multiple vehicles for donors to support the community.</p>

          <div className="event-modal-title-section">
            <h2>Plan</h2>
          </div>
          <p>{event.description}</p>

          {/* <div className="modal-footer"> */}
          {/* <button type="button" className="organization-card-button" data-dismiss="modal">Close</button> */}
          {/* <button type="button" className="organization-card-button">Save changes</button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  </div>;
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return bindActionCreators(
    {
      // add other actions here
      editEvent
    },
    dispatch
  );
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & {
  setModalVisibility: (isOpen: boolean) => void,
  event: Event,
};

export default connector(EventModal);
