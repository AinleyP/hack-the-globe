/* Imports from packages */
import { useState } from 'react';

import Organization from '../data/types/organization'
import Volunteer from '../data/types/volunteer'

import OrganizationCard from './OrganizationCard'
import VolunteerCard from './VolunteerCard'

interface Props {
  organizations: Array<Organization>,
  volunteers: Array<Volunteer>,
}

const OrganizationAndVolunteerList = (props: Props): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState("Organizations");

  const selectTab = (event: React.MouseEvent<HTMLElement>) => {
    setSelectedTab(event.currentTarget.innerText)
  }

  let displayList
  if (selectedTab === "Organizations") {
    displayList = props.organizations.map((item) => <div className="orgs-and-volunteers-list-card"><OrganizationCard key={item.id} org={item}></OrganizationCard></div>)
  }
  else {
    displayList = props.volunteers.map((item) => (<div className="orgs-and-volunteers-list-card"><VolunteerCard key={item.id} volunteer={item}></VolunteerCard></div>))
  }

  return <div className="orgs-and-volunteers-list">
    <div className="orgs-and-volunteers-list-header">
      <div className="orgs-and-volunteers-list-tabs">
        <button className={`orgs-and-volunteers-list-tab ${selectedTab === "Organizations" ? "active" : ""}`} onClick={selectTab}>Organizations</button>
        <button className={`orgs-and-volunteers-list-tab ${selectedTab === "Volunteers" ? "active" : ""}`} onClick={selectTab}>Volunteers</button>
      </div>
      <div className="orgs-and-volunteers-list-filter">
        <h3>Sort by:</h3>
        <div className="dropdown show">
          <a className="orgs-and-volunteers-list-filter-dropdown-btn btn btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Suggested</a>
        </div>
      </div>
    </div>
    <div className="orgs-and-volunteers-list-cards">
      {displayList}
    </div>
  </div>;
};

export default OrganizationAndVolunteerList;
