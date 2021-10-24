import React from "react";

const Button = (props) => {

    function alertar() {
        alert('Alerta!!')
    }

    return (
        <button onClick={() => alertar()}>Clique em mim...</button>
    )
    
}
export default Button;