import { Button, ButtonGroup } from "react-bootstrap"

export function TieneStock({prod}){
  if (prod.stock === 0){
    return(<p className="text-danger">AGOTADO</p>)
  } else {
    return(<p>Stock: {prod.stock}</p>)
  }
}


export function TieneStockDetail({productos,contador,carrito,setCarrito,setContador}){
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
      setContador(0)
      setCarrito(carrito + contador)
      productos.stock = productos.stock - contador
    }
  }
  if (productos.stock === 0){
    return(<p className="text-danger text-center">AGOTADO</p>)
  } else {
    return(
      <div className="d-flex justify-content-between">
        <h3>${productos.precio}</h3>
        <ButtonGroup aria-label="Basic example">
          <Button variant="dark" onClick={decremento}>-</Button>
          <Button disabled variant="light">{contador}</Button>
          <Button variant="dark" onClick={incremento}>+</Button>
        </ButtonGroup>
        <Button variant="dark" onClick={() => agregarAlCarrito(productos,contador)}>Agregar</Button>
      </div>)
  }
}