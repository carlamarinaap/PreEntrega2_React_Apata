import {Badge, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function CartWidget({contador}) {
  return (
      <Button as={Link} to={'/carrito'} variant="dark" className='mt-1' >
        <i className="fa-solid fa-cart-shopping"></i> <Badge bg="danger">{contador}</Badge>
      </Button>
  );
}

export default CartWidget;