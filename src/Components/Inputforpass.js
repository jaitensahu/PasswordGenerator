import "./Inputforpass.css";
import { useState } from "react";
import 'animate.css';

let updatedInput = {};
const Generatepass = (props) => {
  let [newStr, setNewStr] = useState("Your Password");
  let [error, setError] = useState("");
  function generatePassFn() {
    let arrayOfcharCollection = [];
    console.log(inputData, arrayOfcharCollection.length);
    if (Object.keys(inputData).length == 0) {
      // alert("Select any options");
      setError("Select any options");
      return;
    }
    setError("");

    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // Uppercase letters (A-Z)
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split(""); // Lowercase letters (a-z)
    const symbols = "!@#$%^&*()-_+={}[]|;:<>,.?/".split(""); // Symbols
    const numbers = "0123456789".split(""); //Number

    if (props.hasOwnProperty("uppercase") && props["uppercase"]) {
      console.log(arrayOfcharCollection[0]);
      arrayOfcharCollection.push(uppercaseLetters);
    }
    if (props.hasOwnProperty("lowercase") && props["lowercase"]) {
      console.log(arrayOfcharCollection[1]);
      arrayOfcharCollection.push(lowercaseLetters);
    }
    if (props.hasOwnProperty("symbol") && props["symbol"]) {
      console.log(arrayOfcharCollection[2]);
      arrayOfcharCollection.push(symbols);
    }
    if (props.hasOwnProperty("number") && props["number"]) {
      console.log(arrayOfcharCollection[3]);
      arrayOfcharCollection.push(numbers);
    }

    let lengthOfArray = arrayOfcharCollection.length;
    let str = "";
    for (let i = 0; i < props.length; i++) {
      let idx = Math.floor(Math.random() * lengthOfArray);
      let lengthhh = arrayOfcharCollection[idx].length;
      let idx2 = Math.floor(Math.random() * lengthhh);
      str = str + arrayOfcharCollection[idx][idx2];
    }

    if (val < 8 || val > 51) {
      // alert();
      setError("Length out of range");
    } else {
      setError("");
      setNewStr(str);
      props.getInput(val, inputData);
    }
  }

  function copyPass() {
    navigator.clipboard
      .writeText(newStr)
      .then(() => {
        alert("Data copied");
      })
      .catch(() => {
        alert("Error while Copying");
      });
  }
  const [inputData, setInputData] = useState({});
  let [val, setVal] = useState(0);
  props.getInput(val, inputData);
  //
  function inputChange(e) {
    let { value, checked } = e.target;
    updatedInput = { ...inputData, [value]: checked };
    setInputData(updatedInput);
  }
  function getPassLength(e) {
    setVal(e.target.value);
  }

  return (
    <>
      <div className="showPass">
        <p>{newStr}</p>
        {/* <i className="fa-solid fa-copy" onClick={copyPass}></i> */}
        <div class="icon-conatiner" onClick={copyPass}>
          <svg
            width="19px"
            height="21px"
            viewBox="0 0 19 21"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
          >
            <title>Group</title>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Artboard" transform="translate(-142.000000, -122.000000)">
                <g id="Group" transform="translate(142.000000, 122.000000)">
                  <path
                    d="M3.4,4 L11.5,4 L11.5,4 L16,8.25 L16,17.6 C16,19.4777681 14.4777681,21 12.6,21 L3.4,21 C1.52223185,21 6.74049485e-16,19.4777681 0,17.6 L0,7.4 C2.14128934e-16,5.52223185 1.52223185,4 3.4,4 Z"
                    id="Rectangle-Copy"
                    fill="#C4FFE4"
                  ></path>
                  <path
                    d="M6.4,0 L12,0 L12,0 L19,6.5 L19,14.6 C19,16.4777681 17.4777681,18 15.6,18 L6.4,18 C4.52223185,18 3,16.4777681 3,14.6 L3,3.4 C3,1.52223185 4.52223185,7.89029623e-16 6.4,0 Z"
                    id="Rectangle"
                    fill="#85EBBC"
                  ></path>
                  <path
                    d="M12,0 L12,5.5 C12,6.05228475 12.4477153,6.5 13,6.5 L19,6.5 L19,6.5 L12,0 Z"
                    id="Path-2"
                    fill="#64B18D"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <svg
            width="19px"
            height="21px"
            viewBox="0 0 19 21"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
          >
            <title>Group</title>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Artboard" transform="translate(-142.000000, -122.000000)">
                <g id="Group" transform="translate(142.000000, 122.000000)">
                  <path
                    d="M3.4,4 L11.5,4 L11.5,4 L16,8.25 L16,17.6 C16,19.4777681 14.4777681,21 12.6,21 L3.4,21 C1.52223185,21 6.74049485e-16,19.4777681 0,17.6 L0,7.4 C2.14128934e-16,5.52223185 1.52223185,4 3.4,4 Z"
                    id="Rectangle-Copy"
                    fill="#C4FFE4"
                  ></path>
                  <path
                    d="M6.4,0 L12,0 L12,0 L19,6.5 L19,14.6 C19,16.4777681 17.4777681,18 15.6,18 L6.4,18 C4.52223185,18 3,16.4777681 3,14.6 L3,3.4 C3,1.52223185 4.52223185,7.89029623e-16 6.4,0 Z"
                    id="Rectangle"
                    fill="#85EBBC"
                  ></path>
                  <path
                    d="M12,0 L12,5.5 C12,6.05228475 12.4477153,6.5 13,6.5 L19,6.5 L19,6.5 L12,0 Z"
                    id="Path-2"
                    fill="#64B18D"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="inputLength">
        <p>Select Password length(8 - 50 characters)...</p>
        <input type="number" onChange={getPassLength} />
      </div>
      <div className="checkboxs">
        <div className="upperCaseContainer inputCheckbox ">
          <label class="containerr">
            <input type="checkbox"  id="upperCase" value="uppercase"
            onClick={inputChange}/>
            <svg viewBox="0 0 64 64" height="1em" width="1em">
              <path
                d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                pathLength="575.0541381835938"
                class="path"
              ></path>
            </svg>
          </label>
          <label htmlFor="upperCase">Include upper case</label>
        </div>
        <div className="lowerCaseContainer inputCheckbox">
        <label class="containerr">
            <input  id="lowerCase"
            type="checkbox"
            value="lowercase"
            onClick={inputChange}/>
            <svg viewBox="0 0 64 64" height="1em" width="1em">
              <path
                d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                pathLength="575.0541381835938"
                class="path"
              ></path>
            </svg>
          </label>
        
          <label htmlFor="lowerCase">Include lower case</label>
        </div>
        <div className="includeNumContainer inputCheckbox">
        <label class="containerr">
            <input  
             id="includeNum"
             type="checkbox"
             value="number"
             onClick={inputChange}/>
            <svg viewBox="0 0 64 64" height="1em" width="1em">
              <path
                d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                pathLength="575.0541381835938"
                class="path"
              ></path>
            </svg>
          </label>
          
          <label htmlFor="includeNum">Include numbers</label>
        </div>
        <div className="includeSymbolContainer inputCheckbox">
        <label class="containerr">
            <input  
              id="includeSymbol"
              type="checkbox"
              value="symbol"
              onClick={inputChange}/>
            <svg viewBox="0 0 64 64" height="1em" width="1em">
              <path
                d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                pathLength="575.0541381835938"
                class="path"
              ></path>
            </svg>
          </label>
        
          <label htmlFor="includeSymbol">Include symbols</label>
        </div>
      </div>
      <p className="error">{error}</p>
      <button onClick={generatePassFn}>Generate Password</button>
    </>
  );
};
export default Generatepass;
