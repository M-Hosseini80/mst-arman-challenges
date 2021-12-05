import './App.css';
import IsBalance from './components/Is-balance';
import GetRepeatedInfo from './components/Get-repeated-info';
import Encoder from './components/Encoder';
import RemoveRepetitive from './components/Remove-repetitive';
function App() {
  return (
    <div className="App">
      <IsBalance input="(){{}}" />
      <GetRepeatedInfo number="125" />
      <Encoder inputString="abz" repeatCount="2" />
      <RemoveRepetitive string="abbbbbbbbbccccd" />
    </div>
  );
}

export default App;
