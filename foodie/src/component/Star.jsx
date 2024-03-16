import React, { useState } from 'react';

function Star() {
const [ rating, setRating]= useState(0);
const [hover, sethover]= useState(0);
  return (
    <div className="star-rating">
    { [...Array(5)].map((_, index)=> {
      index += 1;
      return(
        <button 
        onClick={()=> setRating(index)}
        key={index}
        type='button'
        className={index <= ( hover||rating)? "": ""}
        onMouseEnter={()=> sethover(rating)}
        onMouseLeave={()=> sethover(index)}
        >
        <span className="text-rose-800 ">&#9733;</span>
        </button>
      )

    })}
    </div>
  )
}

export default Star
