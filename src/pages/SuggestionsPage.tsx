/* Imports from packages */
import { connect } from "react-redux";
import { useState } from 'react';

import Organization from "../data/types/organization";
import Activist from "../data/types/activist";
import RelationshipStatus from "../data/types/relationshipStatus";
import { RootState } from "../data/reducers";
import Layout from '../components/Layout';
import Banner from '../assets/banner.svg'
import ActivistProfileEventList from '../components/ActivistProfileEventList';
import OrganizationAndVolunteerList from '../components/OrganizationAndVolunteerList'
import EventModal from '../components/EventModal'

interface StateProps {
  organizations: Array<Organization>;
  activist: Activist;
}

type Props = StateProps;

const SuggestionsPage = (props: Props): JSX.Element => {
  const [modalIsOpen, setModalVisibility] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(props.activist.events[0]);

  if (modalIsOpen === true) {
    document.body.style.overflow = 'hidden';
  }

  const renderEventModal = () => {
    if (modalIsOpen){
      return <EventModal event={selectedEvent} setModalVisibility={setModalVisibility} ></EventModal>
    } 
  }

  return (
    <div>
      {renderEventModal()}
      <Layout>
        <div className="suggestions-page">
          <div className="banner">
            <img src={Banner} />
          </div>
          <div className="suggestions-page-content">
            <h1 className="suggestions-page-header">Suggestions</h1>
            <div className="suggestions-page-event-list">
              <ActivistProfileEventList 
              setModalVisibility={setModalVisibility}
              setSelectedEvent={setSelectedEvent}
              selectedEvent={selectedEvent}
              events={props.activist.events ? props.activist.events : []} 
              />
            </div>
            <div className="suggestions-page-organization-list">
              <OrganizationAndVolunteerList
                organizations={props.organizations ? props.organizations.filter((org: Organization) => org.status === RelationshipStatus.requested || org.status === RelationshipStatus.suggested) : []}
                volunteers={[]} />
            </div>
          </div>
        </div>
      </Layout >
    </div>
  );
};

const mapStateToProps = (store: RootState): StateProps => {
  return {
    organizations: store.organizations.data,
    activist: store.activist.data,
  };
};


export default connect<
  StateProps,
  Record<string, unknown>,
  Record<string, unknown>,
  RootState
>(
  mapStateToProps
)(SuggestionsPage);
