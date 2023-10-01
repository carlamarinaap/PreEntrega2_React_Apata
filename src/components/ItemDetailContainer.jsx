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


function ItemDetailContainer ({contador,setContador,carrito, setCarrito}) {
  const { itemId } = useParams()
  const prod = getItemById(itemId)

  const agregarAlCarrito = (prod) => {
    if (prod.stock > 0) {
      setContador(contador + 1)
      setCarrito([...carrito, prod]);
      prod.stock --

    }
  }
  let imagen = '';
  switch (prod.categoria) {
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
      imagen = ultra  ;
      break;
  }
  
  return(
    <>
    <Link to={`/item/${prod.id}`}></Link>
      <Card style={{ width: '18rem', margin:'1rem', padding:'0'}} key={prod.id}>
        <Card.Img variant="top" src={imagen} alt={prod.producto} />
        <Card.Body>
          <Card.Title className="text-center">{prod.producto}</Card.Title>
          <Card.Text>
            {prod.descripcion}
          </Card.Text>
          <Button variant="dark" onClick={() => agregarAlCarrito(prod,contador)}>Agregar</Button>
        </Card.Body>
        <Card.Footer className="text-muted text-center">Stock: {prod.stock}</Card.Footer>
      </Card>
      <Button as={Link} to="/productos" variant="outline-dark" >Volver</Button>
    </>
  )
}
export default ItemDetailContainer;