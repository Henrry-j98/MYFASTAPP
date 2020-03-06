import React, { Component } from 'react';
//import Imag from './../imagenes/imag1.jpg';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from '../pages/home';
import Catalogo from '../components/catalogo';

class header extends Component {
    render() {
        return (
            <Router>
            <div className="contarne-fluid"   >
                <div class="rom">





                    <div class="mx-auto texs-primay"><h1><span class="badge badge=secondary"></span></h1></div>
                </div>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
                        <a class="navbar-brand" href="#">FASTAPP</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
        </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/catalogo">Sirlon</Link>
                                    <Link className="dropdown-item" to="#">Bingos</Link>
                                    <Link className="dropdown-item" to="#">Buen taquito</Link>
                                    
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                        </form>
                    </div>
                </nav>
            </div>
            <hr></hr>
            <div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/catalogo" exact component={Catalogo}/>
                </Switch>
            </div>
        </div>
 </Router>
        );
    }
}

