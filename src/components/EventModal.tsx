/* Imports from packages */
import { connect } from "react-redux";
import { useLocation } from 'react-router-dom'
import AkIconOverview from '@atlaskit/icon/glyph/overview';
import AkIconQuote from '@atlaskit/icon/glyph/quote';
import AkIconGraphLine from '@atlaskit/icon/glyph/graph-line';
import AkIconCalender from '@atlaskit/icon/glyph/calendar';
import AkIconSettings from '@atlaskit/icon/glyph/settings';
import protestimage from '../assets/protest.png';

import Activist from '../data/types/activist'
import { RootState } from '../data/reducers'

interface Props {
    setModalVisibility: (isOpen: boolean) => void
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
    <div className="modal-content">
      <div className="modal-header">
        
        <button type="button" className="close" aria-label="Close"onClick={onClickViewDetails}> hi
        </button>
      </div>
      <div className="event-modal-title">
      <img src={protestimage} />
        <div className="event-modal-title-section">
        <h1>Black Lives Matter Toronto</h1>
        </div>
        </div>
        <div className="event-modal-text">
            <p>Modal body text goes here.</p>
            <div className="event-modal-title-section">
            <h2>Resources required</h2>
            </div>
            <p>Modal body text goes here.</p>

            <div className="event-modal-title-section">
            <h2>Mission</h2>
            </div>
            <p>Modal body text goes here.</p>

            <div className="event-modal-title-section">
            <h2>Plan</h2>
            </div>
            <p>Modal body text goes here.</p>

      <div className="modal-footer">
        <button type="button" className="organization-card-button" data-dismiss="modal">Close</button>
        <button type="button" className="organization-card-button">Save changes</button>
      </div>
      </div>
      </div>
      </div>
  </div>;
};

export default EventModal;
