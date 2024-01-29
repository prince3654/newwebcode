import React from "react";
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa"
const Card = (props) =>
{   let review = props.review;
    
    return(
    <div className="flex flex-col md:relative ">
        <div className="absolute top-[-7rem] ">
        <img className="aspect-square rounded-full w-[140px] h-[140px] z-[250]"
         src={review.image}/>
         <div className=" w-[140px] h-[140px] rounded-full absolute bg-violet-500 top-[-6px] right-3 z-[-20]"></div>
        </div>

        <div className=" text-center mt-7">
        <p className="font-bold text-2xl capitalize">{review.name}</p>
        </div>

        <div className=" text-center mt-7">
        <p>{review.job}</p>
        </div>

        <div className="text-violet-400 mx-auto mt-4">
        <FaQuoteLeft/>
        </div>

        <div className="text-center mt-4  text-slate-500">
        <p>{review.text}</p>
        </div>

        <div className="text-violet-400 mx-auto mt-4">
        <FaQuoteRight/>
        </div>

       
    
    
    </div>
                )
}

export default Card;