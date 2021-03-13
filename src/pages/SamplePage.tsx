/* Imports from packages */
import React from "react";

import SampleComponent from '../components/SampleComponent'

interface Props {
  pageName: string
}

const SamplePage = (props: Props): JSX.Element => {
  return <div className="sample-page">
     <h1 className="sample-page-header">Welcome to {props.pageName}</h1>
    <SampleComponent />
  </div>;
};

export default SamplePage
