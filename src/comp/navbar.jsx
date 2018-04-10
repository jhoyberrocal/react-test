import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="toolbar">
                <span className="toolbar-title">Domicilios Test</span>
                <Link to="/" className="toolbar-link">Hola! {this.props.name}</Link>
            </header>
        );
    }
}

export default Navbar;
