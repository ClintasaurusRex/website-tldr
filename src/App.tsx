import { BrowserRouter } from "react-router-dom";

import "./App.css";
import NavBar from "./NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <>
        <div className="main-container">
          <a href="https://react.dev" target="_blank">
            <img src="src/assets/image.png" className="logo react" alt="React logo" />
          </a>
          <h1>T.L.D.R</h1>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
