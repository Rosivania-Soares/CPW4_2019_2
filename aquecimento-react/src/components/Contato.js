import React, { Component } from 'react';


import ItemContato from './ItemContato';
import email from '../img/email.png';
import endereco from '../img/endereco.png';
import fone from '../img/fone.png';

class Contato extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3>Contato</h3>
                    <ItemContato icone={endereco} decricao="Endereço" contato="Rua 8 de novembro, 22" />
                    <ItemContato icone={fone} decricao="Telefone" contato="3333-3333" />
                    <ItemContato icone={email} decricao="Email" contato="cpw4@gmail.com" />
                </div>
            </div>
        );
    }
}

export default Contato;