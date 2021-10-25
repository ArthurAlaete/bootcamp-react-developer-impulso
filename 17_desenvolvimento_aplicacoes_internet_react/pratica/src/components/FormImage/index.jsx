import React from 'react';


// Component não-controlado
class FormImage extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Arquivo selecionado -> ${this.fileInput.current.files[0].name}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload de arquivo:
                    <input type="file" ref={this.fileInput} />
                </label><br/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default FormImage;