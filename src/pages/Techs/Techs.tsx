import { useState } from 'react';
import SubjectBar from '../../components/SubjectBar/SubjectBar';
import './Techs.css';

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

  return (
    <div className="main">
      <div className="cols">
        <div className="techColumn">
          <SubjectBar
            technologies={technologies}
          />
        </div>

        <div className="noteColumn">
          <div>will uwu pwease wendew me some fwiends?</div>
        </div>
      </div>
    </div>
  );
}

export default Techs;
