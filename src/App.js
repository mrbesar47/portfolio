import logo from './logo.svg';
import Nav from './components/nav/nav';
import './App.css';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nav />
      </header>
    </div>
  );
}

export default App;
