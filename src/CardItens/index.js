import React from 'react';
import Itens from '../Itens';

const CardItens = ({ card }) => {
  return (
    <footer>
    <ul>      
    {card.map((cardItens, index) => <Itens key={index} />)}
    </ul>
    </footer>
  )
}

export default CardItens;