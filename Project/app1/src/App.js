import logo from './logo.svg';
import Popular from './Components/Popular';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AnimeItem from './Components/AnimeItem';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Popular/>}/>
      <Route path="/anime/:id" element={<AnimeItem/>}/>
    </Routes>
  
    </BrowserRouter>
  );
}

export default App;
