import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Hi from './components/Hi';
import PropsHi from './components/PropsHi';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome></Welcome>
      <Hello/>
      <Hi/>
      <PropsHi name="Bruce" HeroName="chicken man"/>
      <PropsHi name="Lynne" HeroName="wonder woman"/>
    </div>
  );
}

export default App;
