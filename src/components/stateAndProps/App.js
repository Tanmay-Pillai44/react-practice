import './App.css';
import StateExample from './components/stateAndProps/stateExample';
import PropsExample from './components/propsExample';

function App() {

  const data = "HI, i am from App Component";

  return (
    <div className="App">
      <StateExample />
      <PropsExample data={data} />
    </div>
  );
}

export default App;
