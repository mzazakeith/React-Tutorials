import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Hi from './components/Hi';
import PropsHi from './components/PropsHi';
import PropsClassHi from './components/PropsClassHi';
import StateClassHi from './components/StatesClassHi';
import SetStateCounter from './components/SetStateCounter';
import EventHandlingClick from './components/EventHandlingClick';
import ClassEventClick from './components/ClassEventClick';
import Eventbind from './components/Eventbind';
import ParentComponent from './components/ParentComponent';
import UserGConditionalRendering from './components/UserGConditionalRendering';
import ListRendering from './components/ListRendering';
import AdvanceListRender from './components/AdvanceListRender';

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
      <SetStateCounter/>
      <EventHandlingClick/>
      <ClassEventClick/>
      <Eventbind/>
      <ParentComponent/>
      <UserGConditionalRendering/>
      <ListRendering/>
      <AdvanceListRender/>

    </div>
  );
}

export default App;
