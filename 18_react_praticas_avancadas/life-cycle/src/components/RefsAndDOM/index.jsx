import React, { useRef, useEffect } from 'react'

const RefsAndDOM = () => {
    
    // useRef usa a referência já definida. Não causar renderização 
    // o createRef sempre cria uma nova referêcia, então sempre renderiza
    const inputRef = useRef();
    const count = useRef(1); // Valor padrão, e atual dessa variável

    const handleClick = () => {
        inputRef.current.focus()
        console.log(inputRef.current)
    }

    useEffect(() => {
        setTimeout(() => {
            count.current = 300
        }, 3000)
    }, [])

    return (
        <>
            <h3>Valor do count: {count.current}</h3>
            Foco
            <input type="text" ref={inputRef} />
            <br />
            <br />
            <button onClick={handleClick}>Focar Input</button>
        </>
    )
}

export default RefsAndDOM;