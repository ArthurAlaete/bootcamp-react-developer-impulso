import React from "react";

const Stateless = ({ items }) => {
    return (
        <div>
            <p>Minhas lista stateless</p>
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default Stateless;