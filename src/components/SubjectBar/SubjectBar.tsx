import SubjectBlock from '../SubjectBlock/SubjectBlock';
import './SubjectBar.css';

interface SubjectBarProps {
  subjectArray: string[];
}

function SubjectBar(props: SubjectBarProps) {
  const { subjectArray } = props;
  return (
    <>
      {subjectArray.map((el, i) => (
        <SubjectBlock key={i} subject={el} />
      ))}
    </>
  );
}

export default SubjectBar;
