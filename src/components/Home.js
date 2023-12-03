import React from "react"; 
import image from '../home.jpg';
import './Home.css'
export function Home(){
    return(
        <>
        <center>
        <h1>Hello World</h1>
        <img class='IMG' src={image}/>
        </center>
        
        </>
    );
}
// export function Hello(){
//     return(
//         <h1> World</h1>
//     );
// }
//export default Home;