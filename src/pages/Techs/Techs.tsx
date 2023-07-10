import { useState } from 'react';
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
      <h1>Job Notebook</h1>
      <div className="pages">
        <button>tech</button>
        <button>notes</button>
      </div>
      <div className="cols">
        <div className="techColumn">
          {technologies.map((el) => (
            <div className="techs">{el}</div>
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
