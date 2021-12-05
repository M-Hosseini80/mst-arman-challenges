import './App.css';
import IsBalance from './components/Is-balance';
import GetRepeatedInfo from './components/Get-repeated-info';
import Encoder from './components/Encoder';

function App() {
  return (
    <div className="App">
      <IsBalance input="(){{}}" />
      <GetRepeatedInfo number="125" />
      <Encoder inputString="abz" repeatCount="2" />

    </div>
  );
}

export default App;
