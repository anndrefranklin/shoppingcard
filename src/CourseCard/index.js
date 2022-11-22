import React from 'react';

const CourseCard = ({ img, title, price, handleAddItemToCart }) => {
  return (
  <div className='card'>               
        <img className='card-logo' src={img} alt='logo-image'/>           
        <h1 className='card-title'>{title} R$ {price}</h1>
        <button onClick={() => handleAddItemToCart(img,title, price)}>ADICIONAR</button>
      </div>
  );
}

export default CourseCard;