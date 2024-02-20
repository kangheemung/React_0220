import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [harNumber,setHardNumber]=useState(1);
  const hardSum = hardCalculate(hardNumber);
  const [list, setList] = useState(['ご飯食べる', 'コーディングする']);

  const addToList = () => {
    setList((prevList) => {
      return [inputValue, ...prevList];
    });
    setInputValue(''); // Clears the input after adding to the list.
  };
  const hardCalculate=(number)=>{
    console.log('計算');
    for (let i= 0; i<99999999; i++){

    }return number+10000;
  }

  return (
    <>
    <input
     type= "number"
     value={hardNumber}
     onChange={(e)=> setMardNumber(perseInt(e.target.value))}
    />
    <span> + 10000={hardSum}</span>
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
