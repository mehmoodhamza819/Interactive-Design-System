import logo from './logo.svg';
import Popular from './Components/Popular';
import { useGlobalContext } from './Context/global';

function App() {
  const global = useGlobalContext()
  console.log(global);
  return (
    <div className="App">
      <Popular/>
    </div>
  );
}

export default App;
