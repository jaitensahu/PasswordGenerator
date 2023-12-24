import './App.css';
import ShowPass from './Components/ShowPassword';
import Inputforpass from './Components/Inputforpass';
import { useState } from 'react';

function App() {
  const [length, setLength] = useState();
  const [inputData, setInputData] = useState();
  function getInput(val, inputData){
    setInputData(inputData);
    setLength(val)
  }
  return (
    <div className="App">
     <h1>Password Generator</h1>
     {/* Passing length and checkbox value after getting it from getInput function */}
      <ShowPass length={length} {...inputData}/>
      {/* Passing getInput function to Inputforpass component to get Input data from user */}
      <Inputforpass getInput={getInput} />
    </div>
  );
}

export default App;
