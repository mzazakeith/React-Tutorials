import './App.css';
import Inline from './components/Inline';
import Stylesheet from './components/Stylesheet';
import styles from './appStyles.module.css';


function App() {
  return (
    <div className="App">
      {/* method 1 */}
      {/* <Stylesheet/> */}

      {/* method 2 */}
      <Stylesheet primary={true}/>

      <Inline/>

      <h1 className={styles.success}> CSS modules </h1>
      
    </div>
  );
}

export default App;
