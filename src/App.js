import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState(['ご飯食べる', 'コーディングする']);

  const addToList = () => {
    setList((prevList) => {
      return [inputValue, ...prevList];
    });
    setInputValue(''); // Clears the input after adding to the list.
  };

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addToList}>추가</button> {/* Corrected the typo here */}
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
