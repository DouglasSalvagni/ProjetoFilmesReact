import React, { Component } from 'react';

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
        console.log(this.state)
    }

    loadFilmes() {
        let html = 'https://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(html)
            .then((json) => {
                const dados = JSON.parse(json)
                let state = this.state;
                state.filmes = dados;
                this.setState(state)
            })
            .then()
    }

    render(){
        return(
            <React.Fragment>
                Página Home
            </React.Fragment>
        );
    }
}

export default Home;