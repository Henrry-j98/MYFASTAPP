import React, { Component } from 'react';
import './../estilos/carruseOfer.css';

import ima1 from './../imagenes/iman/1.jpg';
import ima2 from './../imagenes/iman/2.jpg';
import ima3 from './../imagenes/iman/3.jpg';
import ima4 from './../imagenes/iman/4.jpg';
import ima5 from './../imagenes/iman/5.jpg';
import ima6 from './../imagenes/iman/6.jpg';
import ima7 from './../imagenes/iman/7.jpg';
import ima8 from './../imagenes/iman/8.jpg';
import ima9 from './../imagenes/iman/9.jpg';
import ima10 from './../imagenes/iman/10.jpg';






class carruseOferta extends Component {
    render() {
        return (
            <div>


<head>
    
    <title>Carrusel 3D</title>
    
    
</head>
<body>
    <h2>las mejores ofertas </h2>
    <div className="content-all">
        <div className="content-carrousel">
            <figure><img src={ima1} class="" alt="..."/></figure>
            <figure><img src={ima2} class="" alt="..."/></figure>
            <figure><img src={ima3} class="" alt="..."/></figure>
            <figure><img src={ima4} class="" alt="..."/></figure>
            <figure><img src={ima5} class="" alt="..."/></figure>
            <figure><img src={ima6} class="" alt="..."/></figure>
            <figure><img src={ima7} class="" alt="..."/></figure>
            <figure><img src={ima8} class="" alt="..."/>></figure>
            <figure><img src={ima9} class="" alt="..."/></figure>
            <figure><img src={ima10}class="" alt="..."/></figure>
        </div>
    </div>
</body>



            </div>
        );
    }
}

export default carruseOferta;