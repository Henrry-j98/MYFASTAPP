import React, { Component } from 'react';
import Logo1 from '../imagenes/pie/facebook-2.png';
import Logo2 from '../imagenes/pie/twitter-2.png';
import Logo3 from '../imagenes/pie/youtube-2.png';
import Logot from '../imagenes/LOGO.png';
import Logo from '../imagenes/LOGO2.png';
import './../estilos/prueva.css';





class pie extends Component {
    render() {
        return (
            <div>



                <footer  >
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-6 text-left"></div>
                            <h6 className="text-muted lead">CONTACTO:</h6>
                            <h6 className="text-muted">
                                INSTITUTO TECNOLOGICO SUPERIOR DE LOS RIOS<br></br>
                            Carrera ingeneria en Sistema Computacional<br></br>
        Balancan Tabasco<br></br>
        Teléfonos: 000000000 – 000000000.<br></br>
                            </h6>
                        </div>

                        <div className="col-xs-12 col-md-6 text-right"></div>
                        <h6 className="text-muted lead">ENCUENTRANOS EN LAS REDES</h6>
                        <div className="redes-footer">
                            <a href="https://www.facebook.com/"><img src={Logo1} class="rounded float-left" alt="logiin" width="50" height="50"></img>
                                <a href="https://twitter.com/"><img src={Logo2} class="rounded float-left" alt="logiin" width="50" height="50"></img>
                                    <a href="https://www.youtube.com/"><img src={Logo3} class="rounded float-left" alt="logiin" width="50" height="50"></img>




                                    </a>
                                </a>
                            </a>


                        </div>
                        <img src={Logot} class="rounded float-right" alt="logiin" width="80" height="80" />
                        <img src={Logo} class="rounded float-right" alt="logiin" width="200" height="100" />
                    </div>
                </footer>
            </div>
        );
    }
}

export default pie;