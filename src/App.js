
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React from 'react'
import Alert from './Components/Alert';
// import About from './Components/About';
// import{
//   BrowserRouter as Router,
//   Route,
//   Routes
// }from "react-router-dom"; 


function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500)
  }
  
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark Mode has been enabled","success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")
    }
  }
  return (
    <>

     <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
     <Alert alert= {alert}/>
     <div className="containeer">
       {/* <Routes>
        <Route path="/about" element={<About mode={mode}/>}/> */}
        
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below " mode={mode}/>
       
     </div>
   
    </>
    );
}

export default App;
