import React from 'react';

const Item = ({ itemText }) => {
    return (
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">{itemText}</a>
    )
}

export default Item;