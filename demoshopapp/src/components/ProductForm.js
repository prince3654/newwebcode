import { useState } from "react";
import "./ProductForm.css";
function ProductForm() {
  // const [fullProductInput, setFullProductInput] = useState({
  //     title:'',
  //     date:''
  // });
  // function setFullProductInput(){
  //     // return object with updated product

  // }
  const [newTitle, setTitle] = useState(" ");
  const [newDate, setDate] = useState(" ");
  function titleHandler(event) {
    console.log("Title change karo ge" + event.target.value);
    setTitle(event.target.value);
  }
//   function clickHandler(event) {
//     console.log("Add Product is clicked at ");
//   }
  function dateChangeHandler(event) {
    setDate(event.target.value);
    console.log(`Date is changed ${event.target.value}`);
  }
  function submitHandler(event) {
    event.preventDefault();
    const productData = {
      title: newTitle,
      date: newDate,
    };

    console.log(productData);
  }
  return (
    <form className="new-product__controls" onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input type="text" value = "newTitle" onChange={titleHandler}></input>
      </div>

      <div>
        <label>Date</label>
        <input
          onChange={dateChangeHandler}
          value = "newDate"
          type="date"
          min="2023-01-01"
          max="2023-12-12"
        ></input>
      </div>

      <div>
        <button
          className="new-product_button"
          type="submit"
        >
          {" "}
          Add product
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
