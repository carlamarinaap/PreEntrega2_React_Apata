import { useEffect, useState } from "react";
import {suplementos} from '../data/suplementos'
import { Link } from "react-router-dom";

function ItemListContainer({greeting,esCarro=false,carrito}) {  
  const [productos, setProductos] = useState([]);

  const getProductos = () => {
    if (esCarro === false){
      return new Promise((resolve) => (resolve(suplementos)))
    } else {
      return new Promise((resolve) => (resolve(carrito)))
    }
  }
  useEffect(() => {
      getProductos()
      .then(response => {setProductos(response)})
      .catch(error => {console.log(error)})
  },[esCarro])
  return (
    <>
      <h1 className="text-center m-3">  
        {greeting}
      </h1> 
      <div className="d-grid ">
        <div className="row justify-content-around">
          {productos.map((prod) => (
            <Link className='col-3' key={prod.id} to={`/productos/${prod.id}`}>{prod.producto}</Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default ItemListContainer;