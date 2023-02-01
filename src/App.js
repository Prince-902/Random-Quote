import { useState } from "react";
import Welcome from "./Welcome";
function App() {
  
  const [reg, setReg] = useState();
  const [valu, setVal] = useState(false);
  const [name, setName] = useState();
  
  const change = (e) => {
    setName(e.target.value);
  }

  const chan = (e) => {
    setReg(e.target.value);
  }

  const func = () => {
    setVal(true);
  }

  return (
    <>
      <input placeholder="Enter your name" onChange={change}></input>
      <br/>
      <input placeholder="Enter reg. no" onChange={chan}></input>
      <button onClick={func}>submit</button>
      {valu === true && <Welcome name={name} reg={reg} />}
    </>
  );
}

export default App;
