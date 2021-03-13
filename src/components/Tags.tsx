interface Props {
  tags: Array<string>
};

const Tags = (props: Props): JSX.Element => {
  return <div className="tag-row">
    {props.tags.map((tag: string) => <div key={tag} className='tag-row-tag'>{tag}</div>)}
  </div>
};

export default Tags
