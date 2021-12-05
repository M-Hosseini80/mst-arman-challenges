import './App.css';
import IsBalance from './components/Is-balance';
import GetRepeatedInfo from './components/Get-repeated-info';
import Encoder from './components/Encoder';
import RemoveRepetitive from './components/Remove-repetitive';
import Operations from './components/Operations';
function App() {
  return (
    <div className="App">
      <h1>OPEN CONSOLE!</h1>
      <IsBalance input="(){{}}" />
      <GetRepeatedInfo number="125" />
      <Encoder inputString="abz" repeatCount="2" />
      <RemoveRepetitive string="abbbbbbbbbccccd" />
      <Operations ops="-2 5 D + R" />
    </div>
  );
}

export default App;
