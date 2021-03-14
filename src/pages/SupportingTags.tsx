import organizationsReducer from "../data/reducers/organizationsReducer";

interface Props {
    supportingTags: Array<string>
  };
  
  const SupportingTags = (props: Props): JSX.Element => {
    return <div className="interests-row">
      {props.supportingTags.map((tag: string) => <div className='interests-row-tag'>{tag}</div>)}
    </div>
  };
  
  export default SupportingTags
  