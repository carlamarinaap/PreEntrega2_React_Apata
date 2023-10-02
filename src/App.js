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
  const [productos, setProductos] = useState([]);

  return (
    <BrowserRouter className='App'>
      <NavBar contador={contador}/>
      <Routes>
        <Route path='/' element={<Home productos={productos} setProductos={setProductos}/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={''} productos={productos} setProductos={setProductos}/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer contador={contador} setContador={setContador} productos={productos} setProductos={setProductos} />}/>
        <Route path='/quienes-somos' element={<QuienesSomos />}/>
        <Route path='/contacto' element={<Contacto />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
