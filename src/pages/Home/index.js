import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.scss'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filmes: []
        };

        this.loadFilmes = this.loadFilmes.bind(this)
    }

    componentDidMount() {
        this.loadFilmes()
    }

    loadFilmes() {
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            this.setState({filmes: json});
        })
    }

    render(){
        return(
            <div className='container'>
                <div className='lista-filmes'>
                    {this.state.filmes.map((filme)=> {
                        return(
                            <article className='card-filmes' key={filme.id}>
                                <strong className='card-filmes__title'>{filme.nome}</strong>
                                <img className='card-filmes__img' src={filme.foto} alt='capa'></img>
                                <Link to={`/filme/${filme.id}`} className='card-filmes__link'>Acessar</Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Home;