import React, { useEffect, useState, memo } from 'react';

// O memo equivale shouldComponentUpdate 
const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading 
}

const TwitterWithHooks = (props) => {
    
    const { loading } = props;
    const { posts } = props;
    const [tweet, setTweet] = useState('title')
    console.log('Renderizou...')


    // Equivalente ao componentDidMount(só se tiver passando um array vazio).
    useEffect(() => {
        const { posts, loading } = props;
        console.log('Component foi montado', posts);
        console.log('Componente loading', loading)
    }, [])

    // Equivalent ao componentDidUpdate: toda vez que o loading for alterado...
    useEffect(() => {
        console.log('componentDidUpdate', loading)
    }, [loading])

    // Equivalente ao componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('Componente desmontado')
        }
    }, [])

    function handleTweet() {
        setTweet('mudar');
    }

    return(
        <>
            <div>{tweet}</div>
            <button onClick={handleTweet}>Render Again</button>
        </>
    )
}

export default memo(TwitterWithHooks, areEqual);