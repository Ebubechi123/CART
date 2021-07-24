import './App.css';
import React,{useEffect} from 'react';
import { gsap } from 'gsap';

function App() {
useEffect(()=>{
gsap.from(".mine, .hllo",{duration:1.5,opacity:0, scale:0.3, ease:"back"})
})

return (
    <div className="App">
      <h1 className="mine">Hello World</h1>
      <p className="hllo">Ebubechi</p>
    </div>
  );
}

export default App;
