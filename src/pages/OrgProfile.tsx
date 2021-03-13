/* Imports from packages */
import React from 'react';

// import SampleComponent from "../components/SampleComponent";

interface Props {
  pageName: string;
  orgId: number;
}

const OrgProfile = (props: Props): JSX.Element => {
  return (
    <div className='sample-page'>
      <h1 className='sample-page-header'>Welcome to {props.pageName}</h1>
    </div>
  );
};

export default OrgProfile;
