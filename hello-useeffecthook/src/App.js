import { useState } from 'react';
import './App.css';
import './components/TestComponent'
import TestComponent from './components/TestComponent';

function App() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <div className="App">
      {showComponent && <TestComponent/>}
      <button onClick={()=>setShowComponent(state => !state )}>Hide</button>
    </div>
  );
}

export default App;
