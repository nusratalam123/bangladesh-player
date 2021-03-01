import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Players from './Component/Header/players/Players';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Players></Players>
    </div>
  );
}

export default App;
