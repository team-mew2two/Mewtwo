import { useState } from 'react';
import './App.css';

function App() {
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
  ]);

  return (
    <>
      <h1>Job Notebook</h1>
      <div className="cols">
        <div className="techColumn">
          {technologies.map((el) => (
            <div className="techs">{el}</div>
          ))}
        </div>

        <div className="noteColumn">
          <div>hello right</div>
        </div>
      </div>
    </>
  );
}

export default App;
