import './App.css';
import { BrowserRouter } from "react-router-dom";
import Home from './main/home'
import "./Styles/Styles.scss";
import { Context } from "./Context/Context";
import { useState } from "react";

function App() {
  const [them, setTheme] = useState("");
  const toogleTheme = () => them===""? setTheme("_dark"): setTheme("");
  const dataThem = {
    them,
    toogleTheme: toogleTheme,
  };
  return (
    <div className="App">
      <BrowserRouter>
      <Context.Provider value={dataThem}>
      <Home/>
      </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
