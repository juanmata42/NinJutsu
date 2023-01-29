import './App.css';
import Home from './main/home'
import "./Styles/Styles.scss";
import { useState } from "react";

function App() {
  
  const [theme, setTheme] = useState('dark');

  function changeTheme (){
    if (theme === "dark"){
      setTheme("bright")
    } else {
      setTheme("dark")
    }
    return theme
  }
  console.log(theme)
  return (
    <div className={`app ${theme}-mode`}>
      <Home className={`main-${theme}`} value={changeTheme}/>
    </div>
  );
}

export default App;
