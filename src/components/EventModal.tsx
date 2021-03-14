/* Imports from packages */
import { connect } from "react-redux";
import { useLocation } from 'react-router-dom'

import Event from '../data/types/event'
import { RootState } from '../data/reducers'
import CloseIcon from '../assets/close-icon.svg'
import SupportingTags from '../pages/SupportingTags'
import Tags from "./Tags";

interface Props {
  setModalVisibility: (isOpen: boolean) => void,
  event: Event
};

const EventModal = (props: Props): JSX.Element => {
  const location = useLocation();

  const onClickViewDetails = () => {
    props.setModalVisibility(false)
  }

  console.log(location.pathname);

  const isCurrentPath = (regex: RegExp): boolean => regex.test(location.pathname)


  return <div>
    <div className="overlay"></div>
    <div className="event-modal">
      <div className="event-modal-close-icon">
        <button type="button" className="close" aria-label="Close" onClick={onClickViewDetails}><img src={CloseIcon} /></button>
      </div>
      <div className="event-modal-content">
        <div className="event-modal-title">
          <img src={props.event.image} />
          <div className="event-modal-title-section header-text">
            <h1>{props.event.name}</h1>
            <div className="event-modal-supporting-tags">
              <SupportingTags supportingTags={props.event.supportingTags ? props.event.supportingTags : []} />
            </div>
            <h3>Volunteers Needed</h3>
            <h3>Host: Jane Doe</h3>
            <h3>Event Site: facebook.com/protest-event</h3>
            <h3>Location: Toronto, Ontario, Canada</h3>
          </div>
        </div>
        <div className="event-modal-text">
          <div className="event-modal-title-section">
            <h2>Resources required</h2>
          </div>
          <Tags tags={props.event.responsiblities.map((item) => item.name)} />

          <div className="event-modal-title-section">
            <h2>Objectives</h2>
          </div>
          <p>APCF was founded in 1990 by API community leaders in response to the need for alternative funding for Los Angeles-based nonprofit organizations serving API communities. Prior to its incorporation, less than 0.3% of all local foundation funds went to API agencies, according to a 1988 study by A3PCON (Asian Pacific Policy & Planning Council). In 1986, the United Way of Greater Los Angeles funded only five organizations serving APIs. To raise funds for community organizations serving API communities, APCF initiated employee giving campaigns at various workplaces, including private companies, federal agencies, state agencies, county agencies, city agencies, and nonprofit organizations. In the past decade, APCF has diversified its fundraising efforts by developing other avenues for giving. With the growth of donor-advised funds, giving circles, grant making, scholarship funds, and capacity building initiatives, APCF has been able to cultivate philanthropy among APIs while providing multiple vehicles for donors to support the community.</p>

          <div className="event-modal-title-section">
            <h2>Plan</h2>
          </div>
          <p>{props.event.description}</p>

          {/* <div className="modal-footer"> */}
          {/* <button type="button" className="organization-card-button" data-dismiss="modal">Close</button> */}
          {/* <button type="button" className="organization-card-button">Save changes</button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  </div>;
};

export default EventModal;
