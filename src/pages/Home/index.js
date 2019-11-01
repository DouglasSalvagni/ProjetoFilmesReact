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
                    {this.state.filmes.map((item)=> {
                        return(
                            <article className='card-filmes' key={item.id}>
                                <strong className='card-filmes__title'>{item.nome}</strong>
                                <img className='card-filmes__img' src={item.foto} alt='capa'></img>
                                <Link to='/' className='card-filmes__link'>Acessar</Link>
                                <div className='card-filmes__text'>{item.sinopse}</div>
                            </article>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Home;