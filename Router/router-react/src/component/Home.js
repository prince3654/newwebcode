import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Home =()=>{
    const navigate = useNavigate();
    function backHandler(){
        navigate("/About");
    }
    function prevHandler(){
        navigate(-1);
    }
    return(
            <div>
            <h1>Home</h1>
           <button onClick={prevHandler}> Go back</button>
          <button onClick={backHandler}>Go to About</button>
            </div>

    )

}

export default Home;