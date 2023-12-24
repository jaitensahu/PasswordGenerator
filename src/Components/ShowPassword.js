// import { useState } from "react";
import "./Showpassword.css";

const Input = (props) => {

  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // Uppercase letters (A-Z)
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split(""); // Lowercase letters (a-z)
  const symbols = "!@#$%^&*()-_+={}[]|;:<>,.?/".split(""); // Symbols
  const numbers = "0123456789".split(""); //Number
  let arrayOfcharCollection = [];
 
    if (props.hasOwnProperty("uppercase") && (props["uppercase"])) {
      console.log(arrayOfcharCollection[0]);
      arrayOfcharCollection.push(uppercaseLetters)
    }
     if (props.hasOwnProperty("lowercase") && (props["lowercase"])) {
      console.log(arrayOfcharCollection[1]);
      arrayOfcharCollection.push(lowercaseLetters)
    }
    if (props.hasOwnProperty("symbol") && (props["symbol"])) {
      console.log(arrayOfcharCollection[2]);
      arrayOfcharCollection.push(symbols)
    }
    if (props.hasOwnProperty("number") && (props["number"])) {
      console.log(arrayOfcharCollection[3]);
      arrayOfcharCollection.push(numbers)
    }


let lengthOfArray=arrayOfcharCollection.length;
  let str = "";
  for (let i = 0; i < props.length; i++) {
    let idx = Math.floor(Math.random() * lengthOfArray);
    let lengthhh = arrayOfcharCollection[idx].length;
    let idx2 = Math.floor(Math.random() * lengthhh);
    str = str + arrayOfcharCollection[idx][idx2];
  }


  function copyPass() {
    navigator.clipboard
      .writeText(str)
      .then(() => {
        alert("Data copied");
      })
      .catch(() => {
        alert("Error while Copying");
      });
  }
  return (
    <div className="showPass">
      <p>{str}</p>
      <i className="fa-solid fa-copy" onClick={copyPass}></i>
    </div>
  );
};
export default Input;
