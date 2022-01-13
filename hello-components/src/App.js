import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Hi from './components/Hi';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome></Welcome>
      <Hello/>
      <Hi/>
    </div>
  );
}

export default App;
