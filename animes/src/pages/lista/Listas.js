import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../../components/menu/Menu';
import logo from '../../img/logo.png';
import ListaService from '../../services/ListaService';
import './Lista.scss';
// import adicionar from '../../img/adicionar.png';
import rotas from '../../constants/rotas';

export default class Listas extends Component {

    constructor() {
        /**
         * Toda vez que criar um construtor
         * em um componente React, lembre-se
         * de invocar o construtor da classe
         * mãe Component na primeira linha de
         * código.
         */
        super();

        this.state = {
            listas: []
        }

        this.service = new ListaService();
    }

    async componentDidMount() {
        const listas =
            await this.service.recuperarListas();
        this.setState({ listas });
    }

    render() {
        const listas =
            this.state.listas.map(lista => (
                <Link
                    to={
                        {
                            pathname: rotas.LISTA,
                            state: { lista }
                        }
                    }
                    key={lista._id}>
                    <div className="item" >{lista.nome}</div>
                </Link>
            ));

        return (
            <div>
                <Menu
                    logo={logo}
                    paginaAnterior="/"
                    titulo="Animes Online" />

                <div className="conteiner">
                <div>
                <form id="formNovaLista" onSubmit={this.salvar}>
                    <input
                        onChange={this.aoAlterarNome}
                        type="text"
                        name="nome"
                        value={this.state.nome}
                        required
                        placeholder="Digite o nome do anime" />
                    <input type="submit" value="Buscar" />
                </form>
            </div>                    
                    
                </div>
            </div>
        );
    }
}
