/* Imports from packages */
import { bindActionCreators, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { acceptRequestFromOrg, sendRequestToOrg } from '../data/actions/organizationsActions';
import Organization from '../data/types/organization';
import RelationshipStatus from '../data/types/relationshipStatus';
import Tags from './Tags';
import { Link } from 'react-router-dom';

interface DispatchProps {
  acceptRequestFromOrg: typeof acceptRequestFromOrg;
  sendRequestToOrg: typeof sendRequestToOrg;
}

const OrganizationCard = (props: Props): JSX.Element => {
  const renderActionButton = () => {
    switch (props.org.status) {
      case RelationshipStatus.requested:
        return (
          <button
            className="organization-card-button organization-card-accept-button"
            onClick={() => {
              props.acceptRequestFromOrg(props.org);
            }}
          >
            Accept
          </button>
        );
      case RelationshipStatus.suggested:
        return (
          <button
            className="organization-card-button organization-card-connect-button"
            onClick={() => {
              props.sendRequestToOrg(props.org);
            }}
          >
            Connect
          </button>
        );
      case RelationshipStatus.pending:
        return (
          <button className="organization-card-button organization-card-pending-button" disabled>
            Pending
          </button>
        );
      case RelationshipStatus.matched:
        return (
          <button className="organization-card-button organization-card-accepted-button" disabled>
            Accepted
          </button>
        );
      default:
        // do nothing
        break;
    }
  };

  const renderRequestIndicator = () => {
    if (props.org.status === RelationshipStatus.requested) {
      return <div className="organization-card-request-indicator">Connected with you</div>;
    }
  };

  return (
    <div className="organization-card">
      <img src={props.org.image} alt="" />
      <div className="organization-card-text">
        <div className="organization-card-title-section">
          <h1>{props.org.name}</h1>
          {renderRequestIndicator()}
        </div>
        <p>{props.org.bio ? `${props.org.bio.substring(0, 200)}...` : ''}</p>
        <h6>{props.org.address ?? ''}</h6>
        <Tags tags={props.org.resourcesOffered ? props.org.resourcesOffered : []} />
      </div>
      <div className="organization-card-buttons-div">
        <button
          className="organization-card-view-details-button organization-card-button"
          onClick={() => {
            console.log();
          }}
        >
          <Link className="link" to={'/organizations/detail'}>
            View Details
          </Link>
        </button>
        {renderActionButton()}
      </div>
    </div>
  );

};
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return bindActionCreators(
    {
      // add other actions here
      acceptRequestFromOrg,
      sendRequestToOrg,
    },
    dispatch
  );
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & {
  org: Organization,
};

export default connector(OrganizationCard);
