import logo from "./resources/Theatria_2.png";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Wiki from "./screens/Wiki";
import Voting from "./screens/Voting";
import Navbar2 from "./Navbar2";

function App() {
  return (
      <>
          <div className="App">
          <img
            src={logo}
            alt="Logo"
            style={{
              position: "absolute",
              right: "0px",
              bottom: "0px",
              width: "10%",
              borderRadius: "50%",
              padding: "2%",
            }}
          ></img>
              <Navbar2></Navbar2>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/wiki" element={<Wiki></Wiki>}></Route>
            <Route path="/voting" element={<Voting />}></Route>
          </Routes>
        </div>
      </>
  );
}

export default App;
