import SubjectBlock from '../SubjectBlock/SubjectBlock';
import './SubjectBar.css';

interface SubjectBarProps {
  technologies: string[];
}

function SubjectBar(props: SubjectBarProps) {
  const { technologies } = props;
  return (
    <>
      {technologies.map((el, i) => (
        <SubjectBlock key={i} subject={el} />
      ))}
    </>
  );
}

export default SubjectBar;
