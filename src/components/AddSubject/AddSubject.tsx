import './AddSubject.css';
import React, { useState } from 'react';

interface AddSubjectProps {
  technologies: string[];
  setTechnologies: React.Dispatch<React.SetStateAction<string[]>>;
}

function AddSubject(props: AddSubjectProps) {
  const { technologies, setTechnologies } = props;
  const [currentlyTyping, setCurrentlyTyping] = useState(false);
  const [currentText, setCurrentText] = useState('');
  
  const handleClick = (e: any) => {
    setCurrentlyTyping(!currentlyTyping);
    console.log(currentlyTyping);
    console.log(e.target.innerHTML);
  };

  const handleSubmit = (submitEvent: any) => {
    if (submitEvent.key !== 'Enter') {
      return;
    }
  
    setTechnologies([currentText, ...technologies])
    // create new note page, and make post request
    // to create a new row in sql db

    setCurrentText('');
    setCurrentlyTyping(false);

  };

  return (
    <>
      <div className="addSubject">
        {currentlyTyping ? (
          <input
            onKeyDown={handleSubmit}
            onChange={(char) => setCurrentText(char.target.value)}
          ></input>
        ) : (
          <p onClick={handleClick}>+</p>
        )}
      </div>
    </>
  );
}

export default AddSubject;
