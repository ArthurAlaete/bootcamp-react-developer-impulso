import React from "react";


const ManipulatingEvents = () => {
    
    const showEvent = (e) => {
        console.log(e.target)
        alert('Evento clicado')
    }

    const handleChange = (event) => {
        const { value } = event.target; 
        console.log(value)
    }

    const Button = <button onClick={showEvent} >Mostrar Evento</button>
    const Input = <input onChange={handleChange} type="text" />

    return (
        <div>
            {Button}
            {Input}
        </div>
    )
}

export default ManipulatingEvents;