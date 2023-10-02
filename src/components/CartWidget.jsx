import {Badge, Button} from 'react-bootstrap';

function CartWidget({contador}) {
  return (
      <Button variant="dark" className='mt-1' >
        <i className="fa-solid fa-cart-shopping"></i> <Badge bg="danger">{contador}</Badge>
      </Button>
  );
}

export default CartWidget;