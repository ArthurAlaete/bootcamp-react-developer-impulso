import React from 'react';

const RenderizacaoCondicional = () => {
    
    // Variáveis de Elementos
    const buttonA = <button>Primeiro Botão</button>
    const buttonB = <button>Segundo Botão</button>
    const hasCostumer = true;
    
    return (
        <>
            {/* If-else inline com Operador condicional */}
            <h3>Tem costumer? {hasCostumer ? 'Sim' : 'Não'}</h3> 
            {hasCostumer && (  //If inline com Operador Lógico &&
                <div>
                    <h3>Clique no botão abaixo para visualizar histórico de clientes</h3>
                    {buttonA}
                    {buttonB}
                </div>
            )}
        </>
    )
}

export default  RenderizacaoCondicional;