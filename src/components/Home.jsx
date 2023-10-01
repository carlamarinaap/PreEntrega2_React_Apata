import CarouselBienvenida from './CarouselBienvenida';
import ItemListContainer from './ItemListContainer';

function Home({contador, setContador}) {
  return (
    <>
      <CarouselBienvenida/>
      <ItemListContainer greeting={'Mirá nuestros productos'} contador={contador} setContador={setContador}/>
    </>
  );
}

export default Home;