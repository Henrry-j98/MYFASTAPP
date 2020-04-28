import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Carruse from './carruse';
import './../estilos/galeria.css';
import LOGO1 from './../imagenes/c1.jpg';
import './../estilos/estilofor.css';
import LOGO2 from './../imagenes/c2.jpg';
import LOGO3 from './../imagenes/c3.jpg'
import Burger from './../restaurantes/burger';
import Mcdonads from './../restaurantes/Mcdonads';
import Domino from './../restaurantes/dominos';


class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="row carousel">
                        <Carruse />
                    </div>

                    <div className="row tarjetas">

                        <div className="col-xl-3">
                            <div className="card">
                                <img src={LOGO1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">burger king</h5>
                                    <p className="card-text">Las mejores benta de comida rapida        ....... </p>
                                    <Link to="/burger" className="btn btn-primary">Next Page</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card" >
                                <img src={LOGO2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Mc Donald's </h5>
                                    <p className="card-text">Encuentra tus mejores platillos de comidas rapida....</p>
                                    <Link to="/Mcdonads" className="btn btn-primary">Next Nigga</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <img src={LOGO3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Domino's</h5>
                                    <p className="card-text">Las mejores pizzaz que puedas comer           ........</p>
                                    <Link to="/dominos" className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">CASILLA BACIA PARA INGRESAR UNO NUEVO </p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                    </div>


                    <Switch>
                        <Route path="/burger" exact component={Burger} />
                        <Route path="/Mcdonads" exact component={Mcdonads} />
                        <Route path="/dominos" exact component={Domino} />
                    </Switch>
                </div>
            </Router>

        );
    }
}



export default Home;