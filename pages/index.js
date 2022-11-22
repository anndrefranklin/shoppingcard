import React, {useState} from 'react';
import CardItens from '../src/CardItens';
import Courses from '../src/Courses';
import NavBar from '../src/NavBar';

const ShoppingCard =() => {
  const[card, setCard] = useState([]);

  console.log('Carrinho de compras', card);

  function handleAddItemToCart (url, name, price){
    const itemObject = {url, name, price}
    console.log(itemObject);
    console.log([itemObject]);
    
  }

  return (
    <>
    <NavBar />
    <Courses handleAddItemToCart = {handleAddItemToCart} />    
    <CardItens card={card} />
    </>    
    );
};

export default ShoppingCard;