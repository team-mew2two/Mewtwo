import { useState } from 'react';
import SubjectBar from '../../components/SubjectBar/SubjectBar';
import AddSubject from '../../components/AddSubject/AddSubject';
import './Techs.css';
import { setDefaultResultOrder } from 'dns';

function Techs() {
  const [technologies, setTechnologies] = useState([
    'Javascript',
    'Typescript',
    'Prometheus',
    'Grafana',
    'Hello',
    'World',
    'I',
    'Love',
    'Shrek',
    'How',
    'Many',
    'More',
    'Of',
    'These',
    'Bro',
    'What',
    'In',
    'Tarnation',
  ]);

  const handleAddSubjectChange = (e: React.FormEvent<HTMLInputElement>)  => {
    e.preventDefault();
  }

  return (
    <>
      <div className="techMain">
        <div className="subjectColumn">
          <AddSubject 
            technologies={technologies}
            setTechnologies={setTechnologies}
          />
          <SubjectBar subjectArray={technologies} />
        </div>

        <div className="noteColumn">
          <div>will uwu pwease wendew me some fwiends?</div>
        </div>
      </div>
    </>
  );
}

export default Techs;
