import React from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import Search from '../../containers/Search/Search.js';

export const Header = (props) => {
  return (
  <div className='header'>
    <Link 
      to={'/'} 
      className='header__title'
      onClick={() => props.resetWithDefaultCards()}
    >
        Niv-Mizzet's Closet
    </Link>
    <Search />
    <NavLink
      to={'/favorites'}
      className='header__favorites'>
        Favorites
    </NavLink>
  </div>
  )
}
