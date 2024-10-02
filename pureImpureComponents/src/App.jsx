import ImpureComponent from './Components/ImpureComponent';
import PureComponent from './Components/PureComponent';
function App() {
  return (
    <div>
      <h2>Impure Components Example:</h2>
      <ImpureComponent/>
      <h2>Pure Components Example:</h2>
      <PureComponent/>
    </div>
  )
}

export default App
