import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './../pages/home';
import Catalogo from '../components/catalogo';



class Header extends Component {
    render() {
        return (
            <Router>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">Fastapp</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link className="nav-link" to="#">Inicio<span class="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Catalogo
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
            </Router>
        );
    }
}

export default Header;