import { counter } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { useState } from "react";
import '../Task-8/useState.css'


export function GroupButton(){
const[counter,setCounter]=useState(0);
function sub(){
    setCounter(counter-1)
    if(counter==0){
      setCounter(counter*0)
    }
}
function reset(){
    setCounter(counter*0)

}
function add(){
    setCounter(counter+1)
    if(counter==5){
        setCounter(counter)
    }
}

    return(
            <>
                <div className="outer">
                    <h2>{counter}</h2>
                    <button onClick={(reset)} className="">RESET</button>
                    {/* <button onClick={()=>{setCounter(counter+1)}}>ADD</button> */}

                    <button onClick={(add)}>ADD</button>
                    <button onClick={(sub)}>SUB</button>
                </div>
            </>

    );
}