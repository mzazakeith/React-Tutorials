import './App.css';
import FragmentDemo from './components/FragmentDemo';
import ParentComponent from './components/ParentComponent';
import PureComp from './components/PureComp';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      {/* <FragmentDemo/> */}
      {/* <Table/>  */}
      {/* <PureComp/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
