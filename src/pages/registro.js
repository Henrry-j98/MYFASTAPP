import React, { Component } from 'react';


class Registro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
            apellidoPaterno: '',
            apellidoMaterno: '',
            correo: '',

        }

        this.handleNombre = this.handleNombre.bind(this);
        // this.handleApellidos= this.handleApellidoPaterno.bind(this);
        // this.handleApellidos= this.handleApellidoMaterno.bind(this);
        // this.handleCorreo= this.handleCorreo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNombre(event) {

        this.setState({ nombre: event.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        alert('El nombre completo es: ' + this.state.nombre);
    }
    render() {
        return (
            <div>

                <div class="card cardf|">
                    <h5 class="card-header">Registro <small>De Usuario.</small></h5>
                    <div class="card-body">

                        <div class="row">

                            <br />
                            <br></br>
                            <div class="alert alert-warning card-body"> <strong>¡ATENCION!</strong> Ingresar de formar correcta sus datos solicitados en cada una de las casillas asignadas.</div>
                        </div>



                        <form onSubmit={this.handleSubmit} >
                            <div class="form-group">
                                <label for="nombre">Nombre</label>

                                <input type="text" className="form-control" id="nombre" aria-describedby="nombre" placeholder="Escriba su nombre completo" name="nombre" value={this.state.nombre} onChange={this.handleNombre} />

                            </div>
                            <div class="form-group">
                                <label for="apellidoPaterno">Apellido Paterno</label>
                                <input type="text" className="form-control" id="apellidoPaterno" placeholder="Ingrese su primer apellido" name="apellidos" />
                            </div>
                            <div class="form-group">
                                <label for="apellidoMaterno">Apellido Materno</label>
                                <input type="text" className="form-control" id="apellidoMaterno" placeholder="Ingrese su segundo apellido" name="apellidos" />
                            </div>
                            <div class="form-group">
                                <label for="correo">Correo</label>
                                <input type="text" className="form-control" id="correo" placeholder="Ingrese su correo" name="correo" />
                            </div>
                            <div class="form-group">
                                <label for="direccion">Direccion</label>
                                <input type="text" className="form-control" id="direccion" placeholder="Ingrese su direccion" name="direccion" />
                            </div>

                            <input type="submit" value="Enviar" className="btn btn-primary" />
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Registro;