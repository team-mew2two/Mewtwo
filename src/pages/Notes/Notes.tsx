import { useState } from 'react';
import './Notes.css';

function Notes() {
  const [technologies, setTechnologies] = useState([
    'Jobs',
    'Jobs',
    'Another Job',
    'More jobs'
  ]);

  return (
    <div className="main">
      <div className="cols">
        <div className="techColumn">
          {technologies.map((el) => (
            <div className="techs">{el}</div>
          ))}
        </div>

        <div className="noteColumn">
          <div>NOTES</div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
