import React from "react";
export function Technologycard(){
    return(
        <>
        <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col" >
    <div className="card border-5 border border-danger" >
     
    <div className="card-body" >
        <h5 class="card-title">Data Scientist</h5>
        <p class="card-text">Data Scientist gather and analyze large sets of structured and unstructed Data.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuN8e4RNiWvNsJEPAHArF4x3bskotr95z8g&usqp=CAU " className="col-2 float-end " alt="..."/>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-5 border border-info">
     
      <div class="card-body">
        <h5 class="card-title">IOT Developer</h5>
        <p class="card-text">IoT Developer are proessionals who can develop,manage and model IoT devices.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuN8e4RNiWvNsJEPAHArF4x3bskotr95z8g&usqp=CAU " className="col-2 float-end" alt="..."/>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-5 border border-success">
      
      <div class="card-body">
        <h5 class="card-title">VR Developer</h5>
        <p class="card-text">A vit developer create completely new digital enviroment that people can't see</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuN8e4RNiWvNsJEPAHArF4x3bskotr95z8g&usqp=CAU " className="float-end col-2" alt="..."/>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-5 border border-warning">
      
      <div class="card-body">
        <h5 class="card-title">ML Engineer</h5>
        <p class="card-text">Machine learning engineers find data into mobiles deined by data scientists.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuN8e4RNiWvNsJEPAHArF4x3bskotr95z8g&usqp=CAU " class="float-end col-2" alt="..."/>
      </div>
    </div>
  </div>
</div>
        </>
    );
}