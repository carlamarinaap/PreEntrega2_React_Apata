import { useEffect, useState } from "react";
import { getProductos,getItemByCategoria }  from '../data/suplementos'
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import {TieneStock} from "./TieneStock";

function ItemListContainer({greeting}) {  
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams() 

  useEffect(() => {
    const asyncFunc = categoriaId ? getItemByCategoria : getProductos;
    asyncFunc(categoriaId)
      .then(response => {setProductos(response);})
      .catch(error => {console.error(error);});
  }, [categoriaId]);


  return (
    <>
      <h1 className="text-center m-3">  
        {greeting}
      </h1> 
      <div className="d-grid m-5">
      <div className="row justify-content-around">
        {productos.map((prod) => (
          <Card className='text-center m-1 bg-light' style={{ width: '18rem' }}> 
            <Card.Body key={prod.id} >{prod.producto}</Card.Body>
            <TieneStock prod={prod}/>
            <Card.Title as={Link} to={`/item/${prod.id}`}>Ver Producto</Card.Title>
          </Card>
        ))}
      </div>
    </div>
    </>
  )
}

export default ItemListContainer;