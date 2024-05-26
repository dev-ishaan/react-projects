import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Accordian from "./components/Accordian";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(false);

  const showAlert= (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(false)
    }, 3000);
  }

  const toggle =() =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#0e3161';
      showAlert("Dark mode has been enabled", "success")
      document.title = "Practice React - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success")
      document.title = "Practice React - Light Mode"
    }
  }
  return (
    <>
    <Router>
      {/* using props for navbar name */}
      <Navbar title="TestUtils" about="About TextUtils" mode = {mode} toggle={toggle}/>
      <Alert alert={alert}/>
      <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={
            <>
            <div className="container my-5">
            <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode = {mode}/>
          </div>
          <Accordian mode = {mode}/>
          </>
          }/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
