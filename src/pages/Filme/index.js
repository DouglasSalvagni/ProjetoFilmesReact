import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './filme.scss';

class Filme extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filme: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(url)
            .then((r) => r.json())
            .then((json) => this.setState({filme: json}))
    }

    componentDidUpdate() {
        console.log(this.state.filme)
    }

    render() {
        return (
            <div className='container'>
                <div className='lista-filmes'>
                    <article className='card-filmes' key={this.state.filme.id}>
                        <strong className='card-filmes__title'>{this.state.filme.nome}</strong>
                        {this.state.filme.length !== 0 && 
                            <div>
                                <img className='card-filmes__img' src={this.state.filme.foto} alt='capa'/>
                                <Link to='/' className='card-filmes__link'>voltar</Link>
                                <h2 className='card-filmes__sub-title'>Sinopse</h2>
                            </div>
                        }       
                        <div className='card-filmes__text'>{this.state.filme.sinopse}</div>
                    </article>
                </div>
            </div>
        );
    }
}

export default Filme;