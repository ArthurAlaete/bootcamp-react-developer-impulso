import React from 'react';

class FormIceCream extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            flavor: 'Uva',
            iceCreamRind: true,
            napkin: 'sim',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked :  target.value;
        const name = target.name; 
        
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {

        const { flavor, iceCreamRind, napkin } = this.state;
        alert(`Seu sabor escolhido foi ${flavor}, guardanapos ${napkin}, casquinha: ${iceCreamRind} `);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Escolha o sabor:
                    <select name="flavor" value={this.state.flavor} onChange={this.handleInputChange}>
                        <option value="uva">Uva</option>
                        <option value="limao">Limão</option>
                        <option value="coco">Côco</option>
                        <option value="chocolate">Chocolate</option>
                        <option value="morango">Morango</option>
                    </select>
                </label>
                <label>
                    Colocar Casquinha?
                    <input type="checkbox" name="iceCreamRind" checked={this.state.iceCreamRind} />
                </label>
                <label>
                    Guardanapos?
                    <div>
                        <label>
                            <input 
                                type="radio" 
                                id="guardanapos" 
                                name="napkin" 
                                value="sim" 
                                checked={this.state.napkin === 'sim'}
                                onChange={this.handleInputChange}
                            />
                            Sim
                        </label>
                    </div>
                    <div>
                        <label>
                            <input 
                                type="radio" 
                                id="guardanapos" 
                                name="napkin" 
                                value="não" 
                                checked={this.state.napkin === 'não'}
                                onChange={this.handleInputChange}
                            />
                            Não
                        </label>
                    </div>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default FormIceCream;