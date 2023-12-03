import React from "react";
import '../Task-5/Notiication.css'

export function Notiication(){
    return(
     <>
     <center>
     <div id='outer'>
    <div id="inner">
     <h1 className="Info">Information Message</h1>
     <h1 className="Succ">Sucess Message</h1>
     <h1 className="Warn">Warning Message</h1>
     <h1 className="Err">Error Message</h1>
     </div>
     </div>
     </center>
     </>

    );
}