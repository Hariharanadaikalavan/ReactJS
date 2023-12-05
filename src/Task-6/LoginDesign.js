import React from "react";
import '../Task-6/LoginDesign.css';

export function LoginDesign(){
    return(
<><center>
<div id="outerbox">
<div id="innerbox">
<h1>Member Login</h1>
<div id="box">
<input type="text" placeholder="Email" id="textbox1"></input>
<input type="password"  id="textbox2"></input>
<input type="button" value="LOGIN" id="btn"></input>
</div>

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0lY-cSy4dAtt27AGkE7iu3Dmi4dS8y-8kQ&usqp=CAU" id="img" alt="img"></img>

<p>Forget <span id="span">Username/Password?</span></p>
<p id="span">Create your Account</p>

</div>

</div>

</center>

</>


    );
}