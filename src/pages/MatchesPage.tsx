/* Imports from packages */
import { connect } from "react-redux";

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
}

type Props = StateProps;

const MatchesPage = (props: Props): JSX.Element => {
  return (
    <Layout>
      <div className="matches-page">
        <div className="banner">
          <img src={Banner} />
        </div>
        <div className="matches-page-content">
          <h1 className="matches-page-header">Matches</h1>
          <div className="matches-page-organization-list">
            <OrganizationAndVolunteerList 
            organizations={props.organizations ? props.organizations.filter((org: Organization) => org.status === RelationshipStatus.pending || org.status === RelationshipStatus.matched) : []} 
            volunteers={[]} />
          </div>
        </div>
      </div>
    </Layout >
  );
};

const mapStateToProps = (store: RootState): StateProps => {
  return {
    organizations: store.organizations.data,
  };
};


export default connect<
  StateProps,
  Record<string, unknown>,
  Record<string, unknown>,
  RootState
>(
  mapStateToProps
)(MatchesPage);
