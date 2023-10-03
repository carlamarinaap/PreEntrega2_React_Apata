import CarouselBienvenida from './CarouselBienvenida';
import ItemListContainer from './ItemListContainer';

function Home(productos, setProductos) {
  return (
    <>
      <CarouselBienvenida/>
      <ItemListContainer greeting={'Mirá nuestros productos'}  productos={productos} setProductos={setProductos} />
    </>
  );
}

export default Home;