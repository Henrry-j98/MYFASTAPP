import React, { Component } from 'react';
import Carruse from './carruse';
import './../estilos/galeria.css';
import Logo from './../imagenes/c1.jpg';
import './../estilos/estilofor.css';
import LOGO2 from './../imagenes/Logo2.jpg';


class Home extends Component {
    render() {
        return (
            <div>
                <div className="row carousel">  
                 <Carruse />
                </div>

                <div className="row">
                   
                    <div className="col-xl-3">
                        <div class="card">
                            <img src={Logo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">burger king</h5>
                                <p class="card-text">informacion Benta de comida rapida..... </p>
                                <a href="#" class="btn btn-primary">Next Page</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
          <div class="card" >
                            <img src={LOGO2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Prueba</h5>
                                <p class="card-text">hola bitch</p>
                                <a href="#" class="btn btn-primary">Next Nigga</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                </div>

                </div>



            
        );
    }
}

export default Home;