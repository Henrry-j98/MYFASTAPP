import React, { Component } from 'react';
import imag1 from './../imagenes/a1.jpg';
import imag2 from './../imagenes/a2.jpg';
import imag3 from './../imagenes/a3.jpg';
import imag4 from './../imagenes/a4.jpg';
import imag5 from './../imagenes/a5.jpg';


class carruse extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>



          </ol>
          <div class="carousel-inner" />
          <div class="carousel-item active">
            <img src={imag1} class="" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imag2} class="" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imag3} class="" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imag4} class="" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imag5} class="" alt="..." />
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

export default carruse;