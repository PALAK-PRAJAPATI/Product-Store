import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Products.css'
import {useDispatch} from 'react-redux';
import { add } from "../store/cartSlice.js";   //import add action from the cartSlice.


const Products = () => {

  const dispatch = useDispatch();

  const [products, getProducts] = useState([]);

  useEffect(() => {
    // api called. you can also called api with the help of axios.
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => {
        getProducts(result);
      });
  }, []); // we need to this called once that's why we gave an empty brackets.



  // onClick function Add To Cart.
  const addTOCart = (product)=>{
    // dispatch add action.
    dispatch(add(product));
  }



  const card = products.map(product => (
    <div className="col-md-3 container">
      <Card key={product.id} style={{ width: "18rem" }}  className='h-100'>
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
            <Button variant="primary" className='btn' onClick={()=>addTOCart(product)}>ADD To Cart</Button>
        </Card.Footer>
      </Card>
    </div>      
      
  ));

  return (
    <>
      <h1>Products Dashboard</h1>

    <div className="row">{card}</div>
    </>
  );
};

export default Products;
