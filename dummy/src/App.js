import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

function App() {let n=1;
  const[text,setText] = useState(" ");
  function changeHandler(event){ 
    console.log(text);
    setText(event.target.value);
  }
  // Event listner of first tyoe 
  // useEffect(()=> {console.log("UI rendered");
  // }

  // )

 // Event listner of Second tyoe 
  //  useEffect(()=> {console.log("UI rendered");
  // },[]

  // )
   // Event listner of third a tyoe 
  //  useEffect(()=> {console.log("UI rendered");
  // },
  // [text]
  // )

   // Event listner of third b tyoe 
   useEffect(()=> {console.log("UI rendered");
  },[n]

  )

  return (
    <div className="App">
     <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
