import React, { Component } from 'react';
import Menu from '../menu/Menu';

import logo from '../../img/logo.png';

class Listas extends Component {
    render() {
        return (
            <div>
                <Menu logo={logo} paginaAnterior="/" titulo ="Lista de Compras"/>
                Listas
            </div>
        );
    }
}

export default Listas;