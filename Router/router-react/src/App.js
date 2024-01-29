import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Search from "./component/Search";
import ContactUs from "./component/ContactUs";
import Merchandise from "./component/Merchandise";
import About from "./component/About";
import { Link,NavLink } from "react-router-dom";
import MainHeader from "./component/MainHeader"
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
           <NavLink to="/">Home</NavLink>
          </li>
        
          <li>
            <NavLink to="/ContactUs">Contact-Us</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Search">Search</NavLink>
          </li>
          <li>
            <NavLink to="/Merchandise">Merchandise</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
       
        <Route path="/" element={<MainHeader/>}>
        <Route index element ={<Home/>}/>{/*This is your default route 
      ie agar koi route equal nahi hua then ye wala render hoga*/ }
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Merchandise" element={<Merchandise />} />
        <Route
          path="*"
          element={
            <div>
              <h1>NOT FOUND 404 </h1>
            </div>
          }
        />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
