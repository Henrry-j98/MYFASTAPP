import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Logo from '../imagenes/l1.png';
import Acecade from '../pages/acercade';




class header extends Component {
    render() {
        return (
            <Router>
                <div className="contarne-fluid"   >
                    <div class="rom">



                        <div class="mx-auto texs-primay"><h1><span class="badge badge=secondary"></span></h1></div>
                    </div>
                    <div>
                        <nav class="navbar navbar-expand-lg navbar-light bg-none">
                            <a class="navbar-brand" href="#"><img src={Logo} class="image-rounded" alt="..." width="80" height="80" /> </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Registro</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Menu
        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Ofertas</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="/acercade">Acerca de..</a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Mas..</a>
                                    </li>
                                </ul>
                                <form class="form-inline my-2 my-lg-0">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>

                        </nav>
                        
                    </div>
                </div>
                <div>
                    <Switch>
                    <Route path="/acercade" exact component={Acecade}/>
                    </Switch>


</div>
<Home />
            </Router>
        );
    }
}

export default header;