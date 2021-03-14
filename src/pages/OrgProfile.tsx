/* Imports from packages */
import React from 'react';
import { bindActionCreators, Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";

import organizations from '../data/sample_data/organizations';
import Organization from '../data/types/organization';
import RelationshipStatus from '../data/types/relationshipStatus';
import Tags from '../components/Tags'
import SupportingTags from './SupportingTags'
import PointOfContactCard from './PointOfContactCard'
import Star from '../assets/star.svg'
import Layout from '../components/Layout'
import { sendRequestToOrg } from '../data/actions/organizationsActions'

// import SampleComponent from "../components/SampleComponent";

interface DispatchProps {
  sendRequestToOrg: typeof sendRequestToOrg,
}

const OrgProfile = (props: Props): JSX.Element => {
  const org: Organization =
    organizations.find((org) => org.id === props.orgId) ?? organizations[0];
  return (
    <Layout>
      <div className='org-profile-page container'>
        <div className='row'>
          <div className='col-3'>
            <img
              className='org-profile-page-logo'
              src='data:image/png;base64,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'
              alt='logo'
            />
          </div>
          <div className='col-8 org-profile-page-header-text'>
            <div className='row'>
              <h3>{org.name}</h3>
            </div>
            <div className='row org-profile-page-rating'>
              <img src={Star} />
              <img src={Star} />
              <img src={Star} />
              <img src={Star} />
              <img src={Star} />
              <h6>4.9</h6>
            </div>
            <div className='row '>
              <h6>Currently Supporting:</h6></div>
            <div className='row'><SupportingTags supportingTags={org.supportingTags ? org.supportingTags : []} />
            </div>
          </div>
          <div className='col-1'>
            <button className='org-profile-page-connect-button' onClick={() => { sendRequestToOrg(org) }}>Connect</button>
          </div>
        </div>
        <div className='row org-profile-page-bio'><p>{org.bio}</p></div>
        <div className='row'>
          <div className="col-11  org-profile-page-grey-banner">
            <div className='row'>
              <div className="col-6">
                <h5> Personal Message</h5>
                <p>{org.personalMessage}</p>
              </div>
              <div className="col-6">
                <h5> Resources Offered</h5>
                <Tags tags={org.resourcesOffered ? org.resourcesOffered : []} />
              </div>
            </div>
          </div>
        </div>

        <div className='row org-profile-page-info'>
          <div className="col-12"><h5>Information </h5></div>
          <div className="col-3">
            <p>Events helped:</p>
            <p>Sponsorship to date:</p>
            <p>Website:</p>
          </div>
          <div className="col-5">
            <p>{org.eventsHelped}</p>
            <p>{org.sponsorshipToDate}</p>
            <p>{org.website}</p>
          </div>
        </div>
        <div className='row org-profile-page-poc-title'>
          <div className="col-12"><h5>Points of Contact</h5></div>
        </div>
        <div className='row'>
          <div className="col-12 org-profile-page-poc">
            <PointOfContactCard pocs={org.pointsOfContact ? org.pointsOfContact : []} revealEmails={org.status === RelationshipStatus.matched} />
          </div>
        </div>
        <div className='lower-banner'>
          <div className="past-event-sponsorship">
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return bindActionCreators(
    {
      // add other actions here
      sendRequestToOrg
    },
    dispatch
  );
};


const connector = connect(null, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & {
  pageName: string;
  orgId: string;
}

export default connector(OrgProfile);

