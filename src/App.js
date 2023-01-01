import Navbar from './Components/Navbar';
import UnderNav from './Components/UnderNav';
import {useState} from 'react';
import './App.css';


function App() {
  const [mode,setMode] = useState('light');
  
  function toggleMode() {
    if(mode==='light') {
      setMode('dark');
      document.querySelector('body').style.backgroundColor = '#810CA8';
    } else {
      setMode('light');
      document.querySelector('body').style.backgroundColor = '#F3CCFF';
    }
  }
  return (
    <>
      <Navbar heading='Heading' mode={mode} toggleMode={toggleMode}/>
      <UnderNav name='name' mode={mode} who='who'/>
    </>
  );
}

export default App;
