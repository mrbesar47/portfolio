import logo from './logo.svg';
import besar from './besar.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={besar} alt="logo" width={300} height={300} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page currenntly being updated
        </p>
        <a
          className="App-link"
          href="https://www.besarlimani.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Besar Limani
        </a>
      </header>
    </div>
  );
}

export default App;
