import { Button, Card } from "react-bootstrap";
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


function ItemDetailContainer ({contador,setContador,productos, setProductos}) {
  const { itemId } = useParams()

  useEffect(() => {
    getItemById(itemId)
      .then(response => {setProductos(response);})
      .catch(error => {console.error(error)});
  }, [itemId]);


  const agregarAlCarrito = (productos) => {
    if (productos.stock > 0) {
      setContador(contador + 1)
      productos.stock --

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
   
      <Card style={{ width: '18rem', margin:'1rem', padding:'0'}} key={productos.id}>
        <Card.Img variant="top" src={imagen} alt={productos.producto} />
        <Card.Body>
          <Card.Title className="text-center">{productos.producto}</Card.Title>
          <Card.Text>
            {productos.descripcion}
          </Card.Text>
          <Button variant="dark" onClick={() => agregarAlCarrito(productos,contador)}>Agregar al Carrito</Button>
        </Card.Body>
        <Card.Footer className="text-muted text-center">Stock: {productos.stock}</Card.Footer>
      </Card>
      <Button as={Link} to="/" variant="outline-dark" >Volver</Button>
    </>
  )
}
export default ItemDetailContainer;