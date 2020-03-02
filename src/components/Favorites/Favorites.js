import React, { Component } from 'react';
import './Favorites.scss';
import { connect } from 'react-redux';
import CardContainer from '../../containers/CardContainer/CardContainer.js';

export class Favorites extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section className='favorites'>
        <h2>Favorites</h2>
        <CardContainer />
      </section>
    )
  }
}

export const mapStateToProps = state => {
  return {
    favoriteCards: state.favoriteCards
  }
}

export default connect(mapStateToProps)(Favorites)