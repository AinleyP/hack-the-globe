/* Imports from packages */
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import { addOrg } from "../data/actions/organizationsActions";
import Organization from "../data/types/organization";
import Activist from "../data/types/activist";
import RelationshipStatus from "../data/types/relationshipStatus";
import { RootState } from "../data/reducers";
import Layout from '../components/Layout';
import Banner from '../assets/banner.svg'
import ActivistProfileEventList from '../components/ActivistProfileEventList';
import OrganizationAndVolunteerList from '../components/OrganizationAndVolunteerList'

interface StateProps {
  organizations: Array<Organization>;
  activist: Activist;
}

interface DispatchProps {
  addOrg: typeof addOrg;
}

type Props = StateProps & DispatchProps;

const SuggestionsPage = (props: Props): JSX.Element => {
  console.log(props.organizations)
  console.log(props.activist)
  return (
    <Layout>
      <div className="suggestions-page">
        <div className="banner">
          <img src={Banner} />
        </div>
        <div className="suggestions-page-content">
          <h1 className="suggestions-page-header">Suggestions</h1>
          <div className="suggestions-page-event-list">
            <ActivistProfileEventList events={props.activist.events ? props.activist.events : []} />
          </div>
          <div className="suggestions-page-organization-list">
            <OrganizationAndVolunteerList 
            organizations={props.organizations ? props.organizations.filter((org: Organization) => org.status === RelationshipStatus.requested || org.status === RelationshipStatus.suggested) : []} 
            volunteers={[]} />
          </div>
        </div>
      </div>
    </Layout >
  );
};

const mapStateToProps = (store: RootState): StateProps => {
  console.log(store)
  return {
    organizations: store.organizations.data,
    activist: store.activist.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return bindActionCreators(
    {
      // add other actions here
      addOrg,
    },
    dispatch
  );
};

export default connect<
  StateProps,
  DispatchProps,
  Record<string, unknown>,
  RootState
>(
  mapStateToProps,
  mapDispatchToProps
)(SuggestionsPage);
