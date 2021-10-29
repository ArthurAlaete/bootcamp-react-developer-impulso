import React, { Component } from 'react';

class Twitter extends Component {

    // DEPRECIADO A PARTIR DO REACT 17
    // componentWillMount() {
    //     const { posts } = this.props;
    //     console.log('Component será montado!')
    // }

    state = {
        tweet: 'title'
    }

    componentDidMount() {
        const { posts, loading } = this.props;
        console.log('Component foi montado', posts);
        console.log('Componente loading', loading)
    }

    componentDidUpdate(prevProps) {
        const { loading } = this.props;
        if(this.props.loading !== prevProps.loading) {
            console.log('ComponentDidUpdate:Loading', loading)
        } 
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.tweet !== nextState.tweet 
            // || nextProps.loading !== this.props.loading
    }

    componentWillUnmount() {
        console.log('Componente foi desmontado')
    }

    renderForce = () =>  {
        this.setState({
            tweet: 'mudar'
        })
    }

    render() {
        const { posts } = this.props;
        console.log('Render: ', posts)

        return(
            <>
                <div>oi</div>
                <button onClick={this.renderForce}>Render Again</button>
            </>
        )
    }

}

export default Twitter;