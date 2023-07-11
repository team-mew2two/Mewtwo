import { useState } from 'react';
import SubjectBlock from '../../components/SubjectBlock/SubjectBlock';
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
          {technologies.map((el, i) => (
            <SubjectBlock
              key={i}
              subject={el}
            />
          ))}
        </div>

        <div className="noteColumn">
          <div>will uwu pwease wendew me some fwiends?</div>
        </div>
      </div>
    </div>
  );
}

export default Techs;
