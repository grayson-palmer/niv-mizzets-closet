import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../../containers/Search/Search.js';
// import { resetSearchCards } from '../../actions';

export const Header = () => {
  return (
  <div className='header'>
    <Link 
      to={'/'} 
      className='header__title'
      // onClick={() => this.props.resetWithDefaultCards()}
    >
        Niv-Mizzet's Closet
    </Link>
    <Search />
  </div>
  )
}

// export const mapDispatchToProps = dispatch => ({
//   resetSearchCards: () => dispatch( resetSearchCards() )
// })

// export default connect(null, mapDispatchToProps)(Header);