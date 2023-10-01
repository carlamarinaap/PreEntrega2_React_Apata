import { useState } from 'react';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import QuienesSomos from './components/QuienesSomos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  const [contador,setContador] = useState(0)
  const [carrito, setCarrito] = useState([]);

  return (
    <BrowserRouter className='App'>
      <NavBar contador={contador}/>
      <Routes>
        <Route path='/productos' element={<ItemListContainer greeting={'Lista de Productos'} />}/>
        <Route path='/productos/:itemId' element={<ItemDetailContainer contador={contador} setContador={setContador} carrito={carrito} setCarrito={setCarrito}/>}/>
        <Route path='/carrito' element={<ItemListContainer greeting={'Tu Carrito'} esCarro={true} carrito={carrito}/>}/>
        <Route path='/home' element={<Home contador={contador} setContador={setContador} />}/>
        <Route path='/quienes-somos' element={<QuienesSomos />}/>
        <Route path='/contacto' element={<Contacto />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
