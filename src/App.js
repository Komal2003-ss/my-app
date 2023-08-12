
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [alert,setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      mes:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }

  const [mode,setMode] = useState('light');

  const removeBodyClases=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warnig')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleModeOn=(cls) =>{
    // console.log(cls);
    document.body.classList.add('bg'+cls);
    removeBodyClases();
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      document.body.style.color="white";
      showAlert("Enable Dark Mode","Success");
    }
  
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Enable Light Mode","Success");
    }
  }

  const toggleModeOn2=(cls) =>{
    // console.log(cls);
    document.body.classList.add('bg'+cls);
    removeBodyClases();
    if(mode==='light'){
      setMode('danger');
      document.body.style.backgroundColor='red';
      document.body.style.color="white";
      showAlert("Enable Red Mode","danger");
    }
  
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Enable Light Mode","Success");
    }
  }

  const toggleModeOn3=(cls) =>{
    // console.log(cls);
    // document.body.classList.add('bg'+cls);
    removeBodyClases();
    if(mode==='light'){
      setMode('success');
      document.body.style.backgroundColor='green';
      document.body.style.color="white";
      showAlert("Enable Green Mode","danger");
    }
  
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Enable Light Mode","Success");
    }
  }

  return (
    <>
      <Navbar name="MyTextUtils" toggleModeOn={toggleModeOn} mode={mode} toggleModeOn2={toggleModeOn2} toggleModeOn3={toggleModeOn3}/>
      <Alert alert={alert}/>
      <TextForm />
      
    </>
  );
}

export default App;
