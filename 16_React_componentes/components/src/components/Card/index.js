import React, { useState } from 'react';
import Button from '../Button';

const Card = () => {

    const [value , setValue] = useState(0);

    const add = () => setValue(value + 1);
    const remove = () => setValue(value - 1);

    return (
        <div className="card">
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">Título do Card</h5>
                <p className="card-text">{value}</p>
                
                <Button callBack={add} type="success" text="Adicionar"/>
                <Button callBack={remove} type="danger" text="Remover"/>
            </div>
        </div>
    )
}

export default Card;