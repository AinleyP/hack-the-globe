import organizationsReducer from "../data/reducers/organizationsReducer";

interface Props {
    pocs: Array<string>
  };
  
  const PointOfContact = (props: Props): JSX.Element => {
    return <div className="poc-row">
        {props.pocs.map((poc: string) => <div className='poc-row-tag'>
            <div className="row">
                <div className="col-3">{poc}</div>
                </div>
            </div>)}
      
    </div>
  };
  
  export default PointOfContact
  