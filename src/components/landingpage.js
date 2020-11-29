import React, { Component } from "react";


class LandingPage extends Component {
render() {
    return (
        
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

         Welcome to Lacuna School Share 
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>

  <div class="carousel-inner">
      
    <div class="carousel-item active">
      <img src={"products/25.png"} class="d-block w-100" alt="First Picture"></img>
    </div>

    <div class="carousel-item">
      <img src={"products/26.png"} class="d-block w-100" alt="Second Picture"></img>
    </div>

    <div class="carousel-item"> 
      <img src={"products/27.png"} class="d-block w-100" alt="Third Picture"></img>
      </div>

  </div>

  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>

</div>

    );
  }
}

export default LandingPage;

