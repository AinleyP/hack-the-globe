/* Imports from packages */
import { bindActionCreators, Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";

import { acceptRequestFromOrg, sendRequestToOrg } from '../data/actions/organizationsActions'
import Organization, { OrganizationStatus } from '../data/types/organization'
import { RootState } from '../data/reducers'

interface DispatchProps {
  acceptRequestFromOrg: typeof acceptRequestFromOrg,
  sendRequestToOrg: typeof sendRequestToOrg,
}


// type Props = DispatchProps & {
//   org: Organization
// };

const OrganizationCard = (props: Props): JSX.Element => {
  const renderActionButton = () => {
    switch (props.org.status) {
      case OrganizationStatus.requested:
        return <button
          className="organization-card-button organization-card-accept-button"
          onClick={() => { props.acceptRequestFromOrg(props.org) }}>
          Accept
          </button>
        break;
      case OrganizationStatus.suggested:
        return <button
          className="organization-card-button organization-card-connect-button"
          onClick={() => { props.acceptRequestFromOrg(props.org) }}>
          Connect
          </button>
        break;
      case OrganizationStatus.pending:
        return <button
          className="organization-card-button organization-card-pending-button"
          disabled>
          Pending
          </button>
        break;
      case OrganizationStatus.matched:
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

  return <div className="organization-card">
    <img src={props.org.image} />
    <div className="organization-card-text">
      <h1>{props.org.name}</h1>
      <p>{props.org.bio ? `${props.org.bio.substring(0, 300)}...` : ""}</p>
    </div>
    <div className="organization-card-buttons-div">
      <button className="organization-card-view-details-button organization-card-button">View Details</button>
      {renderActionButton()}
    </div>
  </div>;
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return bindActionCreators(
    {
      // add other actions here
      acceptRequestFromOrg,
      sendRequestToOrg
    },
    dispatch
  );
};

const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & {
  org: Organization
};;

export default connector(OrganizationCard);
