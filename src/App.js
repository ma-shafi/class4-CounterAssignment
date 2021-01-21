import React, {useState} from 'react';
import './App.css';
import Message from './Message.js'
 
function App(){
  let [count, setCount] = useState(0);
  let [isDay, setDay] = useState(false);

  return(
    <div className={`box ${isDay ? 'dayLight' : ''}`}>
    <h1>Have A Good {isDay ? 'Morning' : 'Night'}</h1>
    <Message counter={count} />
    <br />
    <button onClick={()=> setCount(++count)}>Update Counter </button>
    <button onClick={()=> setDay(!isDay)}>Set Day</button>
    </div>
    )
  };

export default App;
