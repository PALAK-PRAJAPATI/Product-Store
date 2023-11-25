import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from '../store/cartSlice.js';

const Cart = () => {

  const productCart = useSelector(state=>state.cart);

  const dispatch = useDispatch()

// onClick remove item.
const RemoveToCart = (id)=>{
  // dispatch remove action.
  dispatch(remove(id));
}


  const cards = productCart.map(product => (
    <div className="col-md-12 container">
      <Card key={product.id}   className='h-100'>
      <div className="imgcenter">
             <Card.Img variant="top" src={product.image}  className='img'/>
        </div>
        <Card.Body>
          <Card.Title style={{ textAlign:"center"}}>{product.title}</Card.Title>
          <Card.Text  style={{ textAlign:"center"}}>
            INR. {product.price}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer>
            <Button variant="danger" className='btn' onClick={()=>RemoveToCart(product.id)}>Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>      
      
  ));


  return (
    
    <div>
      <h1>Your Cart</h1>
      <div className="row">{cards}</div>
    </div>
  )
}

export default Cart
