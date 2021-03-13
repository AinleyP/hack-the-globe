/* Imports from packages */
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import { addOrg } from '../data/actions/organizationsActions'
import Organization from '../data/types/organization'
import { RootState } from '../data/reducers'

interface StateProps {
  organizations: Array<Organization>
}

interface DispatchProps {
  addOrg: typeof addOrg,
}

type Props = StateProps & DispatchProps;

const SampleComponent = (props: Props) : JSX.Element => {
  const onClick = () => {
    props.addOrg({id: 4, name: "Bill and Melinda Gates Foundation"})
  }
  return <div className="sample-component">
      <p className="sample-component-text">{JSON.stringify(props.organizations)}</p>
      <button type="button" className="btn btn-outline-primary" onClick={onClick}>Add Matched Org</button>
      <a href="/login">Go to login</a>
  </div>;
};

const mapStateToProps = (store: RootState): StateProps => {
  return {
    organizations: store.organizations.all,
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

export default connect<StateProps, DispatchProps, Record<string, unknown>, RootState>(mapStateToProps, mapDispatchToProps)(SampleComponent);
