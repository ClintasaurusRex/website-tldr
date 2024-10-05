import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src="src/assets/image.png" className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>T.L.D.R</h1>
      </>
    </BrowserRouter>
  );
}

export default App;
