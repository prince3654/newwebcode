import { useState } from "react";

import "./App.css";
import data from './data';
import Tours from './components/Tours';


function App() {
 const [tours,setTours] = useState(data);
   function removeTour(id){
   const newTours = tours.filter(tour => tour.id !== id);
     setTours(newTours);

   }
   function refreshHandler(){
    setTours(data);
   }
   if(tours.length ===0){
    return (
      <div className="refresh">
      <h2>No Tours Left</h2>
      <div>
      <button onClick={refreshHandler} className="refresh-button">Refresh Content</button>
      </div>
      </div>

    );
   }
  return (
   <div>
    <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
