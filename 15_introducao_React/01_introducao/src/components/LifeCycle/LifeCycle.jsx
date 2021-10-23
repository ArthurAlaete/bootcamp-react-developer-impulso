import React, { Component } from "react";

class LifeCycle extends Component {
    
    constructor(props) {
        super(props)


        this.state = {
            clock: 1000,
            copo: 'Água'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                copo: 'Suco'
            })
        }, 2000)
    }

    componentDidUpdate() {
        console.log('Atualizou aqui cara...')
    }

    alterarCopo = () => {
        this.setState({
            copo: 'Refrigerante'
        })
    }
    
    render() {
        const { clock, copo } = this.state;
        return (
            <div>
                <h1>{clock}</h1>
                <h3>Estou tomando: {copo}</h3>
                <button onClick={() => this.alterarCopo()}>Mudar</button>
            </div>
        )
    }
}

export default LifeCycle;