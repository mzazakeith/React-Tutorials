import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Hi from './components/Hi';
import PropsHi from './components/PropsHi';
import PropsClassHi from './components/PropsClassHi';
import StateClassHi from './components/StatesClassHi';

function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
      <Greet/>
      <Hello/>
      <Hi/>
      <PropsHi Name="Bruce" HeroName="chicken man">
        <p>This is children props</p>
      </PropsHi>
      <PropsHi Name="Lynne" HeroName="supergirl">
        <button>Action</button>
      </PropsHi>
      <PropsClassHi Name="max" HeroName="wonder woman"></PropsClassHi>
      <PropsClassHi Name="stark" HeroName="ironman"></PropsClassHi>
      <StateClassHi/>
    </div>
  );
}

export default App;
