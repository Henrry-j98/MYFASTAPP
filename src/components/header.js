import React, { Component } from 'react';
<<<<<<< HEAD
import Imag from './../imagenes/imag1.jpg';
class header extends Component {
    render() {
        return (
            <div className="contarne-fluid"   >
                <div class="rom">
=======
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './../pages/home';
import Catalogo from '../components/catalogo';

>>>>>>> 14800622be023865df021f067c3587cbd7ad9dad



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
<img  src={Imag}glass="imeg-responcive margir"alt="imag"/>

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
>>>>>>> 14800622be023865df021f067c3587cbd7ad9dad

