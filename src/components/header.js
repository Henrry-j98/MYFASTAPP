import React, { Component } from 'react';
<<<<<<< HEAD
import Home from '../pages/home';





class header extends Component {
    render() {
        return (
            <div className="contarne-fluid"   >
                <div class="rom">
=======
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './../pages/home';
import Catalogo from '../components/catalogo';
>>>>>>> b3e1c934bbe7617b0246b157b66e4b4d94b94a4c



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
<<<<<<< HEAD
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>

</nav>


<Home/>


</div>
                </div>
                );
            }
        }
        
export default header;
=======
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
>>>>>>> b3e1c934bbe7617b0246b157b66e4b4d94b94a4c

export default Header;