import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import CarruseOferta from './carruseOferta';
import iman1 from './../imagenes/ofer/o1.jpg';
import iman2 from './../imagenes/ofer/o2.jpg';
import './../estilos/tarjetas.css';

class ofertas extends Component {
    render() {
        return (
            <Router>

                <div>

                    <div className="rom ">>
                        <CarruseOferta />
                    </div>


                    <div className="row tar ">

                        <div className="card mb-3">
                            <img src={iman1} class="card-img-top" alt="/o1.jpg"></img>
                            <div className="card-body">
                                <h5 className="card-title">LA MEJOR OFERTA</h5>
                                <p className="card-text">compar tus comida faborita y de modo rapido .</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">LO MAS BARATO</h5>
                                <p className="card-text"> encuentras tus bevidas faboritas con un combo.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            <img src={iman2} className="card-img-top" alt="/o2.jpg"></img>
                        </div>

                    </div>

                </div>
            </Router>
        );
    }
}

export default ofertas;