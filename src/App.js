import logo from "./resources/Theatria_2.png";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Wiki from "./screens/Wiki";
import Voting from "./screens/Voting";
import ImportantLinks from "./ImportantLinks";
import Navbar from "./Navbar";

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
          <Navbar></Navbar>
          <ImportantLinks style={{ position: "absolute" }}></ImportantLinks>
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
