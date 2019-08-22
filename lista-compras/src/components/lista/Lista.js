import React, { Component } from 'react';
import Menu from '../menu/Menu';

import paginaAnterior from '../../img/paginaAnterior.png';

class Lista extends Component {
    render() {
        return (
            <div>
                <Menu logo={paginaAnterior} paginaAnterior="/" titulo ="Minha lista"/>
                Lista
            </div>
        );
    }
}

export default Lista;