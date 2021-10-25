import React, { Component, useState } from "react";



// Usando Hook
const Stateful = () => {

    const [items, setItems] = useState(['Tomate', 'Alface', 'Melancia']);
    
    const addItem = (item) => setItems([...items, item])
    const removeItem = () => setItems([...items.slice(1)]);

    return (
        <div>
            <p>Minhas Lista</p>
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
            <button onClick={() => addItem('Abóbora')}>Adicionar</button>
            <button onClick={() => removeItem()}>Remover</button>
        </div>
    )
}

// UTILIZANDO CLASSES: 
// class Stateful extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             items: [
//                 'Tomate',
//                 'Alface',
//                 'Melancia'
//             ]
//         }
//     }

//     addItem = (item) => {
//         this.setState({
//             items: [...this.state.items, item]
//         })
//     }
    
//     removeItem = () => {
//         this.setState({
//             items: [...this.state.items.slice(1)]
//         })
//     }
    
//     render() {
//         const { items } = this.state;
    
//         return (
//             <div>
//                 <p>Minhas Lista</p>
//                 <ul>
//                     {items.map(item => <li>{item}</li>)}
//                 </ul>
//                 <button onClick={() => this.addItem('Abóbora')}>Adicionar</button>
//                 <button onClick={() => this.removeItem()}>Remover</button>
//             </div>
//         )
//     }
// }

export default Stateful;