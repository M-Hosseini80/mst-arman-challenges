import './App.css';
import IsBalance from './components/Is-balance';
import GetRepeatedInfo from './components/Get-repeated-info';
function App() {
  return (
    <div className="App">
      <IsBalance input="(){{}}" />
      <GetRepeatedInfo number="125" />
    </div>
  );
}

export default App;
