import './App.css'
import { useState } from 'react';

function App(){
  const [counter, setCounter] = useState(1);
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);

    console.log("clicked"+counter);
  }

  const subValue = () => {
    setCounter((prevCounter) => prevCounter - 1);
  }

  const [display, setDisplay] = useState(false);
    return (<>
        <h1>couting:{counter}</h1>
        <button onClick={addValue}>counter++</button>
        <br/>
        <br/>
        <button onClick={subValue}>counter--</button>

        <h2>toggle button</h2>
        <button onClick={() => setDisplay(!display)}>Show/hide</button>
        {display? <h2>neetesh</h2>:"noting"}
    </>);
}

export default App;
