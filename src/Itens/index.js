import React from 'react';

const Itens = (name, price) => {
  return (
    <li>
        <h2 className='list-title'>{name}</h2>
        <span className='list-price'> R$ {price}</span>
        <button className='remove-btn'>REMOVER</button>
    </li>
  );
}

export default Itens;