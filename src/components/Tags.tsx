import { Resource } from '../data/types/responsiblity'

interface Props {
  tags: Array<Resource>
};

const Tags = (props: Props): JSX.Element => {
  return <div className="tag-row">
    {props.tags.map((tag: Resource) => <div key={tag} className='tag-row-tag'>{tag}</div>)}
  </div>
};

export default Tags
