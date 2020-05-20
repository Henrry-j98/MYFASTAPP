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
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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