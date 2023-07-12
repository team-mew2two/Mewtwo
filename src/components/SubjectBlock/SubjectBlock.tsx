import './SubjectBlock.css';

interface SubjectBlockProps {
  subject: string;
}

function SubjectBlock(props: SubjectBlockProps) {
  const { subject } = props;
  return(
    <div className="techs">
      {subject}
    </div>
  )
}

export default SubjectBlock;