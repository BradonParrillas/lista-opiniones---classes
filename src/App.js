import "./App.css";
import Opinion from "./components/Opinion.jsx";
import data from "./data/opiniones";

let opiniones = [];

data.forEach((item) => {
  opiniones.push(
    <Opinion
      name={item.name}
      country={item.country}
      image={item.image}
      position={item.position}
      company={item.company}
      opinion={item.opinion}
    />
  );
});

class App extends React.Component {
  render() {
    <div className="App">
      <div className="contenedor-principal">
        <h1>Estas son opiniones</h1>
        {opiniones}
      </div>
    </div>;
  }
}

export default App;
