import { useState, useCallback, useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [length, setLength] = useState(12);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerater = useCallback(() => {
    let pass = "";
    let passStr = "abcdefghijklmnopqrstuvwxyzABCDEFHJIKJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let characters = "!@#$%&*";
    if (charAllowed) {
      passStr += characters;
    }
    if (numberAllowed) {
      passStr += numbers;
    }
    for (let i = 0; i < length; i++) {
      pass += passStr[Math.floor(Math.random() * passStr.length)];
      setPassword(pass);
    }
  }, [length, numberAllowed, charAllowed]);
  
  useEffect(()=>{
    passwordGenerater()
  },[length, charAllowed, numberAllowed,])

  const copyFunction =()=>{
    window.navigator.clipboard.writeText(password)
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-5 bg-secondary p-3 mx-auto rounded">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-danger text-center mb-0">
                  Password Generater
                </h2>
              </div>
              <div className="col-md-12 my-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    value={password}
                  />
                  <button className="btn btn-primary" onClick={copyFunction}>Copy</button>
                </div>
              </div>
              <div className="col-4 d-flex align-items-center gap-2 justify-content-center">
                <input
                  type="range"
                  name="length"
                  id="length"
                  className="form-range"
                  min={8}
                  max={16}
                  value={length}
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
                <label htmlFor="length" className="form-label">
                  Length
                </label>
              </div>
              <div className="col-4 d-flex align-items-center gap-2 justify-content-center">
                <input
                  type="checkbox"
                  name="numbers"
                  id="numbers"
                  className="form-check"
                  onChange={(e)=>{
                   setNumberAllowed((prev)=>!prev)
                  }}
                />
                <label htmlFor="numbers" className="form-label">
                  Numbers
                </label>
              </div>
              <div className="col-4 d-flex align-items-center gap-2 justify-content-center">
                <input
                  type="checkbox"
                  name="character"
                  id="character"
                  className="form-check"
                  onChange={(e)=>{
                   setCharAllowed((prev)=>!prev )
                  }}
                />
                <label htmlFor="character" className="form-label">
                  character
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
