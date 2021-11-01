import React, { Component }  from "react";
import { connect } from 'react-redux';
// Responsável a conectar o componente a nossa Store
// connect faz você receber as informações da store como se fossem propriedades
import { addToDo } from '../../store/actions'

import { 
    Button, 
    List, 
    Input } 
from '../../components' 

class App extends Component {

    state = {
        input: '',
    }

    handleOnClick = () => {
        const { addToDo } = this.props;
        const { input } = this.state;

        addToDo(input)
    }

    handleOnChange = (event) => {
        // console.log('Mudou algo...', event.target.value);
        this.setState({ input: event.target.value })
    }

    render () {

        const { input } = this.state;

        return (
            <div>
                <List />
                <Input onChange={(event) => this.handleOnChange(event)} value={input} />
                <Button onClick={this.handleOnClick}>Adicionar</Button>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    listToDo: state.todo,
})

// map StateToProps e Actions
export default connect(mapStateToProps, { addToDo })(App);