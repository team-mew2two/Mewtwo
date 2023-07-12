import SubjectBar from '../../components/SubjectBar/SubjectBar';
import { useState } from 'react';
import './Notes.css';

function Notes() {
  const [companies, setCompanies] = useState([
    'Jobs',
    'Jobs',
    'Another Job',
    'More jobs',
  ]);

  return (
    <>
      <div className="noteMain">
        <div className="subjectColumn">
          <SubjectBar subjectArray={companies} />
        </div>

        <div className="noteColumn">
          <div>NOTES</div>
        </div>
      </div>
    </>
  );
}

export default Notes;
