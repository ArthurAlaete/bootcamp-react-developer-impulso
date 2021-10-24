import Item from "./components/Item";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="App">
      <h1>Aplicação React</h1>
      <ul>
        <Item itemText="Item1" />
        <Item itemText="Item2" />
        <Item itemText="Item3" />

        <Card />
      </ul>
    </div>
  );
}

export default App;
