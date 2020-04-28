import React, { Component } from 'react';
import Logot from '../imagenes/LOGO.png';
import Logo2 from '../imagenes/LOGO2.png';
class pie extends Component {
    render() {
        return (
            <div >
                <footer class="container-fluid text-center">
                    <h1> INSTITUTO TECNOLOGICO SUPERIOR DE LOS RIOS </h1>
                    <h2>FATSAPP </h2>
                    <h4>Ingenenieria en sistema computacional</h4>
                    <h2>Docente: Dany Cambrano Álvaro</h2>
                    <h2>Creadores de la pag:</h2>
                    <h4>>  Álavro josé peréz velázquez.</h4>
                    <h4>>  Henry jesus Guzman Arcos</h4>
                    <h4>>  Abelardo Gomes Gusman  </h4>

                    <img src={Logot} class="rounded float-left" alt="logiin" width="100" height="100" />
                    <img src={Logo2} class="rounded float-right" alt="logiin" width="400" height="100" />


                    
           
            
        


                </footer>

            </div>
        );
    }
}

export default pie;