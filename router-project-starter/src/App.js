import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home"
import Navbar from "./Component/Navbar";
import Login from "../src/Login"
;
function App() {
  return (
<div>
<Navbar/>

<Routes>
<Route path="/" element={<Home/>}/>
{/* <Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
  */}
</Routes>
</div>

  );
}

export default App;
