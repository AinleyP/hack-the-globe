import organizationsReducer from "../data/reducers/organizationsReducer";
import PointOfContact from '../data/types/pointOfContact'

interface Props {
  pocs: Array<PointOfContact>,
  revealEmails: boolean
};

const PointOfContactCard = (props: Props): JSX.Element => {
  return <div className="row poc-row">
    {props.pocs.map((poc: PointOfContact) => <div className='poc-card'>
      <div className="poc-card-image" ><img src={poc.image} /></div>
      <div className="poc-card-text">
        <h4>{poc.name}</h4>
        <h5>{poc.position}</h5>
        <div className="poc-card-email">
          <h6>Email:</h6>
          {props.revealEmails ? <h6>{poc.email}</h6> : <div className="poc-card-email-cover"><h6>Connect to reveal</h6></div>}
        </div>
      </div>
    </div>)}
  </div>
};

export default PointOfContactCard
