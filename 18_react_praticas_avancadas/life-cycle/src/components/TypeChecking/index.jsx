import React from 'react';
import PropTypes from 'prop-types'

const TypeChecking = ({ 
    cats, 
    dogs, 
    birds, 
    costumers, 
    costumerName,
    handleClick,
}) => {
    return (
        <>
            <h1>Cats: {cats}</h1>
            <h2>Dogs: {dogs}</h2>
            <h3>Birds: {birds}</h3>
            <div>
                Quantidade de Clientes: {costumers}
            </div>
            <div>
                Nome do cliente: {costumerName}
            </div>
            <button onClick={handleClick}>Iniciar Banho</button>
        </>
    )
}

TypeChecking.defaultProps = {
    // cats: 0,
    dogs: 0,
    birds: 0,
    costumers: [],
    costumerName: 'Desconhecido',
    handleClick: function() {
        console.log('Iniciando função padrão')
    }
}

TypeChecking.propTypes = {
    cats: PropTypes.number.isRequired,
    dogs: PropTypes.number,
    costumers: PropTypes.array,
    costumerName: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    status: PropTypes.oneOf(['status1', 'status2'])
}

export default TypeChecking;