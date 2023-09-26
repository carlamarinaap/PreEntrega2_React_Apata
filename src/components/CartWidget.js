import {Badge, Button} from 'react-bootstrap';

function CartWidget() {
  return (
    <Button variant="dark" className='mt-1'>
      <i className="fa-solid fa-cart-shopping"></i> <Badge bg="danger">9</Badge>
      <span className="visually-hidden">productos añadidos</span>
    </Button>
  );
}

export default CartWidget;