import './App.css';
import Home from './main/home'
import "./Styles/Styles.scss";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <div className={`app ${theme}-mode`}>
      <Home/>
    </div>
  );
}

export default App;
