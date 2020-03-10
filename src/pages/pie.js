import React, { Component } from 'react';
import Logot from '../imagenes/LOGO.png';
class pie extends Component {
    render() {
        return (
            <div>
              <footer class="container-fluid text-center">
                    <h1> INTITITO TECNOLOGICO SUPERIOR DE LOS RIOS </h1>
                    <h2>TIENDA </h2>
                    <p>Ingenenieria en sistema computacional</p>
                    <h2>Docente: Dany Cambrano Álvaro</h2>
                    <img src={Logot} class="img-rounded" alt="logiin" width="80" height="80" />

                </footer>
  
            </div>
        );
    }
}

export default pie;