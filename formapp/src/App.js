import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const[firstName,setFirstName]=   useState("");
  // const[lastName,setLastName]= useState("");

  // function firstNameHandler(event){
  //     setFirstName(event.target.value);
  //     // console.log(firstName);
  //   }

  //   function lastNameHandler(event){
  //     setLastName(event.target.value);
  //     // console.log(lastName);
  //       }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    checkbox: false,
    favCar: "",
  });
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }
 
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        ></input>
     
      <br />
      <br />
     
        <input
          type="text"
          placeholder="Last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        ></input>
      
      <br />
      <br />
     
        <input
          type="email"
          placeholder="email id"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        ></input>
      
      <br />
      <br />

      <textarea
        placeholder="enter your comment here"
        onChange={changeHandler}
        name="comment"
        value={formData.comment}
      ></textarea>
      <br/> <br/>
      <input
        type="checkbox"
        onChange={changeHandler}
        name="checkbox"
        id="checkbox"
        checked={formData.checkbox}
      />
      <label htmlFor="checkbox"> I am checkbox</label>
      <br/> <br/>
      <label htmlFor="favCar">choose your car</label>
    
      <select 
      id="favCar" 
      name="favCar" 
      value={formData.favCar}
      onChange={changeHandler}>
      <option value="scarpio">scarpio</option>
      <option value="Thar">Thar</option>
      <option value="Fortuner">Fortuner</option>
      <option value="Defender">Defender</option>
      <option value="Bollero">Bollero</option>
      </select>
    <button>Submit</button>

      </form>
     </div>
  );
}

export default App;
