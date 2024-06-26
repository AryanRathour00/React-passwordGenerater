import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-5 bg-secondary p-3 mx-auto rounded">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-danger text-center mb-0">Password Generater</h2>
              </div>
              <div className="col-md-12 my-3">
                <div className="input-group">
                  <input type="text" className="form-control" />
                  <button className="btn btn-primary">Copy</button>
                </div>
              </div>
              <div className="col-4 d-flex align-items-center gap-2 justify-content-center">
                <input type="range" name="length" id="length" className="form-range" />
                <label htmlFor="length" className="form-label">Length</label>
              </div>
              <div className="col-4 d-flex align-items-center gap-2 justify-content-center">
                <input type="checkbox" name="numbers" id="numbers" className="form-check" />
                <label htmlFor="numbers" className="form-label">Numbers</label>
              </div>
              <div className="col-4 d-flex align-items-center gap-2 justify-content-center">
                <input type="checkbox" name="character" id="character" className="form-check" />
                <label htmlFor="character" className="form-label">character</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
