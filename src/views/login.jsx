import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.goToHome = this.goToHome.bind(this);
    }

    handleChange(event) {
        this.setState({nombre: event.target.value});
    }

    goToHome() {
        localStorage.setItem('name', this.state.nombre);
        this.props.history.push({
            pathname: '/home'
        });
    }

    render() {
        const hasNombre = this.state.nombre.length > 3 ? (
            <aside>
                <p>hola, <b>{this.state.nombre}</b></p>
                <button className="btn lg primary pointer" onClick={this.goToHome}>Continuar</button>
            </aside>
        ) : '';

        return (
            <div className="container">
                <div className="row">
                    <div className="col xs12">
                        <h1 className="tx-center">Bienvenido, ingrese su nombre.</h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col xs8 off-2 input-group">
                        <input type="text" id="nombre" className="input-control" onChange={this.handleChange} placeholder="Nombre"/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col xs12 tx-center">
                        {hasNombre}
                    </div>
                </div>
            </div>
        );
    };
}

export default Login;
