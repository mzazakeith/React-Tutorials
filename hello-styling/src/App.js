import './App.css';
import Stylesheet from './components/Stylesheet';


function App() {
  return (
    <div className="App">
      {/* method 1 */}
      {/* <Stylesheet/> */}

      {/* method 2 */}
      <Stylesheet primary={true}/>
    </div>
  );
}

export default App;
