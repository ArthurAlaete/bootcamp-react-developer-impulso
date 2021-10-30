import React, { useState }from "react";
import { render } from "react-dom";

const RenderProps = ({ increment, decrement, count }) => {

    const Buttons = () => {
        return (
            <div>
                <h1>Valor atual: {count}</h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        )
    }

    const Counter = () => {
    
        const [count, setCount] = useState(0)
        
        const increment = () => setCount(count + 1);
        const decrement = () => setCount(count - 1);
        
        return (
            <>
                {render({
                    count: count,
                    increment: increment,
                    decrement: decrement,
                })}
            </>
        )
    }

    return(
        <div>
            {/* O COUNTER está servindo como wrapper e fornecendo as funções e props */}
            {/* O principal intuito é reaproveitar métodos de componentes */}
            <Counter render={
                ({ increment, decrement, count }) => {
                    <Buttons 
                        increment={increment}
                        decrement={decrement}
                        count={count}
                    />
                }
            }>
            </Counter>
        </div>
    )
}


export default RenderProps;