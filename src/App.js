import './App.css';
import Alerts from './components/Alerts';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React , {useState} from 'react';

function App() {
  
  const [mode, setMode] = useState("light");
  const [txtcolor, setTxtcolor] = useState("dark");
  const [alert, setAlert] = useState(null);
 
 const showAlert = (msg,type)=>{
      setAlert({
        msg : msg,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
 }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode("dark");
      setTxtcolor("white");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled." , "success");
    }
    else{
      setMode("light");
      setTxtcolor("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled." , "success");
    }

  }

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title = "TextUtils" about = "About Us" mode ={mode} toggleMode = {toggleMode} txt ={txtcolor} />
        <Alerts alert = {alert} />
        <div className="container ">
          {/* <Routes>
            <Route exact path = "/"
                    element = {<TextForm heading = "Enter Text To Analyze" showAlert = {showAlert} mode ={mode} txt ={txtcolor} />} />
            <Route exact path = "/About"
                      element = {<About mode = {mode}  txt ={txtcolor} />}  />
          </Routes> */}

            <TextForm heading = "Enter Text To Analyze" showAlert = {showAlert} mode ={mode} txt ={txtcolor} />
            {/* <About mode = {mode}  txt ={txtcolor} /> */}
        </div>
        
      {/* </BrowserRouter> */}
  </>
  );
}

export default App;
