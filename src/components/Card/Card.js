import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

export const Card = ({ name, image, id, setSelectedCard }) => {
  return (
    <Link 
      to={`/cards/${id}`} 
      className='card' 
      id={id} 
      onClick={() => {
        setSelectedCard(id)}}
    >
      <img className='card__image' src={image} alt={`${name} card picture`} />
    </Link>
  )
}