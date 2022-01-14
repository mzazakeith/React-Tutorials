import './App.css';
import Inline from './components/Inline';
import Stylesheet from './components/Stylesheet';


function App() {
  return (
    <div className="App">
      {/* method 1 */}
      {/* <Stylesheet/> */}

      {/* method 2 */}
      <Stylesheet primary={true}/>

      <Inline/>
    </div>
  );
}

export default App;
