import Navbar from './Components/Navbar';
import UnderNav from './Components/UnderNav';
import Space from './Components/Space';
import Caraousal from './Components/Caraousal';
import {useState} from 'react';
import './App.css';


function App() {
  const [mode,setMode] = useState('light');
  
  function toggleMode() {
    if(mode==='light') {
      setMode('dark');
      document.querySelector('body').style.backgroundColor = '#ff9900';
      document.querySelector('#upate').style.borderColor = '#00333';
    } else {
      setMode('light');
      document.querySelector('body').style.backgroundColor = '#b3d1ff';
      document.querySelector('#upate').style.borderColor = '#ffffff';
    }
  }
  return (
    <>
      <Navbar heading='Heading' mode={mode} toggleMode={toggleMode}/>
      <UnderNav name='name' mode={mode} who='who'/>
      <Space/>
      <Caraousal/>
      <Space/>
    </>
  );
}

export default App;
