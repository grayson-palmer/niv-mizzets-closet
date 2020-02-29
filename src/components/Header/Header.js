import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../../containers/Search/Search.js';

export const Header = () => {
  return (
  <div className='header'>
    <Link 
      to={'/'} 
      className='header__title'
    >
        Niv-Mizzet's Closet
    </Link>
    <Search />
  </div>
  )
}