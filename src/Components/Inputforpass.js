import "./Inputforpass.css";
import { useState } from "react";
let flag=true;
let updatedInput={}
const Generatepass = (props) => {

  function generatePassFn() {
    if (val < 8 || val > 51) {
      alert("Length out of range");
    } else {
      if(flag){
        setVal(val);
        flag=false;
        // console.log("true me ho");
      }else{
        // console.log("false me ho");
        setVal(Number(val));
        flag=true;
      }
      // setVal(val);
      // setInputData(updatedInput);
      props.getInput(val, inputData);
      // setInputData(updatedInput);
      // inputChange();
      console.log(Number(val)+0);
      
    }
  }
  const [inputData, setInputData] = useState({});
  let [val, setVal] = useState(0);
  // 
  function inputChange(e) {
    let { value, checked } = e.target;
     updatedInput = { ...inputData, [value]: checked };
    setInputData(updatedInput);
  }
  function getPassLength(e) {
    // console.log(e.target.value);
    setVal(e.target.value);
  }

  return (
    <>
      <div className="inputLength">
        <p>Select Password length(**8-50 characters**)</p>
        <input type="number" onChange={getPassLength} />
      </div>
      <div className="checkboxs">
        <div className="upperCaseContainer inputCheckbox">
          <input
            id="upperCase"
            value="uppercase"
            type="checkbox"
            onClick={inputChange}
          />
          <label htmlFor="upperCase">Include upper case</label>
        </div>
        <div className="lowerCaseContainer inputCheckbox">
          <input
            id="lowerCase"
            type="checkbox"
            value="lowercase"
            onClick={inputChange}
          />
          <label htmlFor="lowerCase">Include lower case</label>
        </div>
        <div className="includeNumContainer inputCheckbox">
          <input
            id="includeNum"
            type="checkbox"
            value="number"
            onClick={inputChange}
          />
          <label htmlFor="includeNum">Include numbers</label>
        </div>
        <div className="includeSymbolContainer inputCheckbox">
          <input
            id="includeSymbol"
            type="checkbox"
            value="symbol"
            onClick={inputChange}
          />
          <label htmlFor="includeSymbol">Include symbols</label>
        </div>
      </div>
      <button onClick={generatePassFn}>Generate Password</button>
    </>
  );
};
export default Generatepass;
