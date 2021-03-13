/* Imports from packages */
import { connect } from "react-redux";
import AkIconOverview from '@atlaskit/icon/glyph/overview';
import AkIconQuote from '@atlaskit/icon/glyph/quote';
import AkIconGraphLine from '@atlaskit/icon/glyph/graph-line';
import AkIconCalender from '@atlaskit/icon/glyph/calendar';
import AkIconSettings from '@atlaskit/icon/glyph/settings';

import Activist from '../data/types/activist'
import { RootState } from '../data/reducers'

interface StateProps {
  activist: Activist
}

type Props = StateProps;

const Navbar = (props: Props): JSX.Element => {
  return <div className="my-navbar nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <div className="my-navbar-user-info my-navbar-pill">
      <img src={props.activist.image} alt="profile pic"/>
      <h3>{props.activist.name}</h3>
    </div>
    <a className="my-navbar-pill nav-link active" id="v-pills-home-tab" data-toggle="pill" href="/profile" role="tab" aria-controls="v-pills-home" aria-selected="true">
      <span>
        <span className="my-navbar-icon">
          <AkIconOverview label="" />
        </span>
        <label>Profile</label>
      </span>
    </a>
    <a className="my-navbar-pill nav-link" id="v-pills-profile-tab" data-toggle="pill" href="/pending" role="tab" aria-controls="v-pills-profile" aria-selected="false">
      <span>
        <span className="my-navbar-icon">
          <AkIconQuote label="" />
        </span>
        <label>Pending</label>
      </span>
    </a>
    <a className="my-navbar-pill nav-link" id="v-pills-messages-tab" data-toggle="pill" href="/matches" role="tab" aria-controls="v-pills-messages" aria-selected="false">
      <span>
        <span className="my-navbar-icon">
          <AkIconGraphLine label="" />
        </span>
        <label>Matches</label>
      </span>
    </a>
    <a className="my-navbar-pill nav-link" id="v-pills-settings-tab" data-toggle="pill" href="/events" role="tab" aria-controls="v-pills-settings" aria-selected="false">
      <span>
        <span className="my-navbar-icon">
          <AkIconCalender label="" />
        </span>
        <label>Events</label>
      </span>
    </a>
    <a className="my-navbar-pill nav-link" id="v-pills-settings-tab" data-toggle="pill" href="/settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
      <span>
        <span className="my-navbar-icon">
          <AkIconSettings label="" />
        </span>
        <label>Settings</label>
      </span>
    </a>
  </div>;
};

const mapStateToProps = (store: RootState): StateProps => {
  return {
    activist: store.activist.data,
  };
};

export default connect<StateProps, Record<string, unknown>, Record<string, unknown>, RootState>(mapStateToProps)(Navbar);
