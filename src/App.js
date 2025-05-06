import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignUp from './pages/LoginSignUp';
import Hero from './components/Hero/Hero';
import Popular from './components/Popular/Popular';
import Offers from './components/Offers/Offers';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Navbar /> 
      <Hero /> 
      <Popular /> 
      <Offers /> 
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path='/produc' element={<Product/>}>
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignUp/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


/* os components navbar, hero, popular, offers... e pra serem rend erizados no componente Shop*/