import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Logo from '../imagenes/l1.png';
import Acecade from '../pages/acercade';
import Pie from '../pages/pie';
import Contato from '../pages/contacto';
import Registro from '../pages/registro';
import Oferta from '../pages/ofertas';




class header extends Component {
    render() {
        return (
            <Router>

                <div className="contarne-fluid"   >

                    <div >
                        <nav className="navbar navbar-expand-lg navbar-light bg-none">
                            <Link className="navbar-brand" to="/"></Link>
                            <Link className="navbar-brand" to="/"><img src={Logo} className="image-rounded" alt="..." width="100" height="80" />                       </Link>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Inicio <span class="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/registro">Registro</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Menu
        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="/ofertas">Ofertas</a>
                                            <a className="dropdown-item" href="/contacto">Contacto</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/acercade">Acerca de..</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">....</a>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="Search" placeholder="Buscar" aria-label="Search" />






                                    





                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">buscar</button>
                                </form>
                            </div>

                        </nav>

                    </div>
                </div>

                <div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/acercade" exact component={Acecade} />
                        <Route path="/contacto" exact component={Contato} />
                        <Route path="/registro" exact component={Registro} />
                        <Route path="/ofertas" exact component={Oferta} />


                    </Switch>


                </div>



                <Pie />




            </Router>

        );
    }


}


export default header;