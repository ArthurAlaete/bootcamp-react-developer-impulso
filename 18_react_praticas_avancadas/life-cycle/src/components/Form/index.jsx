import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

const Form = () => {

    const context = useContext(ThemeContext)

    const renderForm = (
        <form>
            <label>Nome</label>
            <input type="text" />

            <label>Idade</label>
            <input type="text" />
            
            <label>Profissão</label>
            <input type="text" />
        </form>
    )

    const renderNotLogged = (
        <h1>Necessário realizar Login!</h1>
    )

    return (
        <div>
            {context.token ? renderForm : renderNotLogged}
        </div>
    )
}

export default Form;