import React, { Component } from 'react';
import errorIMG from '../../assets/error.jpeg'

// é um component que irá envolver (wrapper) em tod anossa aplicação
class ErrorBoundaryComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error: ', error)
        console.log('Error Info: ', errorInfo)
        this.setState({
            hasError: true
        })
    }

    render() {
        if(this.state.hasError) {
            return (<img src={errorIMG} alt="Imagem de error" />)
        }
        return this.props.children
    }
}

export default ErrorBoundaryComponent;