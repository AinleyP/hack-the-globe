/* Imports from packages */
import { bindActionCreators, Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";

import Volunteer from '../data/types/volunteer'
import RelationshipStatus from '../data/types/relationshipStatus'
import Tags from './Tags'



interface Props {
  volunteer: Volunteer
};

const VolunteerCard = (props: Props): JSX.Element => {
  const renderActionButton = () => {
    switch (props.volunteer.status) {
      case RelationshipStatus.requested:
        return <button className="organization-card-button organization-card-accept-button">
          Accept
          </button>
        break;
      case RelationshipStatus.suggested:
        return <button className="organization-card-button organization-card-connect-button">
          Connect
          </button>
        break;
      case RelationshipStatus.pending:
        return <button
          className="organization-card-button organization-card-pending-button"
          disabled>
          Pending
          </button>
        break;
      case RelationshipStatus.matched:
        return <button
          className="organization-card-button organization-card-accepted-button"
          disabled>
          Accepted
          </button>
        break;
      default:
        // do nothing
        break;
    }
  }

  const renderRequestIndicator = () => {
    if (props.volunteer.status === RelationshipStatus.requested) {
      return <div className="organization-card-request-indicator">Connected with you</div>

    }
  }

  return <div className="organization-card">
    <img src={props.volunteer.image} />
    <div className="organization-card-text">
      <div className="organization-card-title-section">
        <h1>{props.volunteer.name}</h1>
        {renderRequestIndicator()}
      </div>
      <p>{props.volunteer.bio ? `${props.volunteer.bio.substring(0, 300)}...` : ""}</p>
      <Tags tags={props.volunteer.resourcesOffered ? props.volunteer.resourcesOffered : []} />
    </div>
    <div className="organization-card-buttons-div">
      <button className="organization-card-view-details-button organization-card-button">View Details</button>
      {renderActionButton()}
    </div>
  </div>;
};

export default VolunteerCard;

