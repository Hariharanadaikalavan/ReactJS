import React from "react";
import image from '../Task-4/Back.jpg'
import '../Task-4/SocialButton.css';

export function SocialButton(){
    return(
        <>
        <div id="Box">
            <div id="inner"><center>
        <input type="button" value="Like" className="btn" id="like"></input>
        <input type="button" value="Comments" className="btn" id="comments"></input>
        <input type="button" value="Share" className="btn" id="share"></input></center>
        </div>
        </div>
        </>
    );
}