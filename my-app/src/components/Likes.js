import React from "react";
import { useState } from "react";

function Likes({ el }) {
  return (
    <div className="flex mt-2  border-b-2">
      <img className="h-10 w-10 rounded-full " src={el.image} />
      <div className="relative w-full">
        <h1>{el.title}</h1>
        <p className="font-extralight absolute right-1 top-5 pb-5">
          {el.price}$
        </p>
      </div>
    </div>
  );
}

export default Likes;
