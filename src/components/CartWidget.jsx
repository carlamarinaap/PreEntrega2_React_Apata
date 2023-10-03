import {Badge, Button} from 'react-bootstrap';

function CartWidget({carrito}) {
  return (
      <Button variant="dark" className='mt-1' >
        <i className="fa-solid fa-cart-shopping"></i> <Badge bg="danger">{carrito}</Badge>
      </Button>
  );
}

export default CartWidget;