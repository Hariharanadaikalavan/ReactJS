import React from "react";
import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <>
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">ReactJS Task</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#"></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#"></a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        TaskMangement
                        </a>
                        <ul class="dropdown-menu">
                           <Link to="/Home"><li className="">1.HelloWorld</li></Link>
                           <Link to="/Congratscards"><li>2.Congratscards</li></Link>
                           <Link to="/League"><li>3.League</li></Link>
                           <Link to="/SocialButton"><li>4.SocialButton</li></Link>
                           <Link to="/Notiication"><li>5.Notification Bar</li></Link>
                           <Link to="/LoginDesign"><li>6.Login Page</li></Link>
                           <Link to='/Technologycard'><li>7..Technology Cards</li></Link>
                           <Link to='/Groupbutton'><li>8.GroupButton</li></Link>
                           <Link to='/ProductPage'><li>Product Display</li></Link>
                           <Link to='/FoodCouter'><li>9.FoodCounter</li></Link>
                           <Link to="/Details"><li>10.Details</li></Link>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </>
    );
}