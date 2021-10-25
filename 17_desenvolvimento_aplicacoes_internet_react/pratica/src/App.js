import React from "react";
import Stateful from "./components/Stateful/index";
import Stateless from "./components/Stateless/index";
import FormName from "./components/FormName";
import FormIceCream from "./components/FormIceCream";
import FormImage from "./components/FormImage";

function App() {
  return (
    <div className="App">
        {/* <Stateful /> */}
        {/* <Stateless items={['Tomate', 'Morango', 'Laranja']} /> */}
        <FormName />
        <FormIceCream />
        <FormImage />
    </div>
  );
}

export default App;
