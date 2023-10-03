import { Button, ButtonGroup, Card } from "react-bootstrap";
import {Link, useParams} from 'react-router-dom'
import { getItemById } from "../data/suplementos";
import carnitina from '../img/carnitina.jpg'
import cafeina from '../img/cafeina.jpg'
import creatina from '../img/creatina.jpg'
import ultra from '../img/ultra.jpg'
import proteina from '../img/proteina.jpg'
import barra from '../img/barra.jpg'
import pildora from '../img/pildora.png'
import gel from '../img/gel.jpeg'
import tarro from '../img/tarro.png'
import { useEffect } from "react";


function ItemDetailContainer ({contador,setContador,productos, setProductos,setCarrito, carrito}) {
  const { itemId } = useParams()

  useEffect(() => {
    getItemById(itemId)
      .then(response => {setProductos(response);})
      .catch(error => {console.error(error)});
  }, [itemId]);


  const incremento = () => {
    if (contador < productos.stock ) {
      setContador(contador + 1)
    }
  }
  const decremento = () => {
    if (contador > 0 ) {
      setContador(contador - 1)
    }
  }

  const agregarAlCarrito = (productos) => {
    if (productos.stock > 0) {
      setCarrito(carrito + contador)
      productos.stock = productos.stock - contador
    }
  }
  let imagen = '';
  switch (productos.categoria) {
    case 'barra': 
      imagen = barra;
      break;
    case 'vitamina': 
      imagen = pildora;
      break;
    case 'gel': 
      imagen = gel;
      break;
    case 'carnitina': 
      imagen = carnitina;
      break;
    case 'cafeina': 
      imagen = cafeina;
      break;
    case 'proteina': 
      imagen = proteina;
      break;
    case 'creatina': 
      imagen = creatina;
      break;
    case 'ultra': 
      imagen = ultra;
      break;
    default:
      imagen = tarro;
  }
  
  return(
    <>
      <div className="d-flex justify-content-end mx-5 align-items-end ">
        <Card className='m-auto mt-3' style={{ width: '18rem', padding:'0'}} key={productos.id}>
          <Card.Img variant="top" src={imagen} alt={productos.producto} />
          <Card.Body>
            <Card.Title className="text-center">{productos.producto}</Card.Title>
            <Card.Text>
              <p>{productos.descripcion}</p>
            </Card.Text>
            <div className="d-flex justify-content-between">
              <h3>${productos.precio}</h3>
              <ButtonGroup aria-label="Basic example">
                <Button variant="dark" onClick={decremento}>-</Button>
                <Button disabled variant="light">{contador}</Button>
                <Button variant="dark" onClick={incremento}>+</Button>
              </ButtonGroup>
              <Button variant="dark" onClick={() => agregarAlCarrito(productos,contador)}>Agregar</Button>
            </div>
          </Card.Body>
          <Card.Footer className="text-muted text-center">Stock: {productos.stock}</Card.Footer>
        </Card>
        <Button as={Link} to="/" variant="outline-dark" >Volver</Button>
      </div>
    </>
  )
}
export default ItemDetailContainer;