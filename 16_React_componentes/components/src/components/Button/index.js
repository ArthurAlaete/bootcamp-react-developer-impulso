import React from 'react';

const Button = ({ callBack, type, text}) => {
    return (
        <button 
            onClick={() => callBack()} 
            className={`btn btn-${type}`}
        >
            {text}
        </button>
    )
}

export default Button;