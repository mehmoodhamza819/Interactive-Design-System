import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import {Home} from './components/Home';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import {Contact} from './components/Contact';
import { Header } from './components/Header';
import { Admin } from './components/Admin';
import {Link,NavLink,Navigate} from 'react-router-dom'

function App() {
  const isAdmin = true;
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<ProductList/>}></Route>
        <Route path='/product/222' element={<ProductDetail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/admin' element={ isAdmin?<Admin/>:<Navigate to="/"/>}></Route>
      </Routes>
    </div>
    <footer>FOOTER</footer>
    </BrowserRouter>
  );
}

export default App;