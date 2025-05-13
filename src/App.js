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
import NewCollections from './components/NewCollections/NewCollections';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Footer from './components/Footer/Footer';
import mens_banner from '../src/components/Assets/banner_mens.png'
import womens_banner from '../src/components/Assets/banner_women.png'
import kids_banner from '../src/components/Assets/banner_kids.png'
import ShopContextProvider from './context/ShopContext';

function App() {
  return (
    <ShopContextProvider  className="App">
      <Navbar /> 
      <Hero /> 
      <Popular /> 
      <Offers />
      <NewCollections /> 
      <NewsLetter /> 
      
      <Routes>  
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory banner={mens_banner} category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory banner={womens_banner} category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}/>
        <Route path='/produc' element={<Product/>}>
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignUp/>} />
      </Routes>
      <Footer />
    </ShopContextProvider>
  );
}

export default App;


/* os components navbar, hero, popular, offers... e pra serem rend erizados no componente Shop*/