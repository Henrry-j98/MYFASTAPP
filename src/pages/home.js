import React, { Component } from 'react';
import Carruse from './carruse';
import '../imagenes/galeria.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="row carousel">
                <Carruse/>
                </div>

                <div className="row">
                    <div className="col-lg-3">
                        Columna 1
                    </div>
                    <div className="col-lg-3">
                        Columna 2
                    </div>
                    <div className="col-lg-3">
                        Columna 3
                    </div>
                    <div className="col-lg-3">
                        Columna 4
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-3">
                        Columna 1
                    </div>
                    <div className="col-lg-3">
                        Columna 2
                    </div>
                    <div className="col-lg-3">
                        Columna 3
                    </div>
                    <div className="col-lg-3">
                        Columna 4
                    </div>

                </div>
   
   
                
            </div>
        );
    }
}

export default Home;