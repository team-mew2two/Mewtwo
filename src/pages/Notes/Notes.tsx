import SubjectBar from '../../components/SubjectBar/SubjectBar';
import AddSubject from '../../components/AddSubject/AddSubject';
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
        <AddSubject 
            subject={companies}
            setSubject={setCompanies}
          />
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
