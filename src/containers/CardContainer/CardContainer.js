import React, { Component } from 'react';
import './CardContainer.scss';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card.js';

export class CardContainer extends Component {
  constructor() {
    super()
  }

  render() {
    if (this.props.searchCards && this.props.searchCards.length > 0) {
      // console.log('search', this.props.searchCards);
      let displaySearchCards = this.props.searchCards.map(card => {
        return <Card 
          image = {card.image_uris.normal} 
          id = {card.tcgplayer_id}
        />
      })
      return (
        <section className='card-container'>
          {displaySearchCards}
        </section>
      )
    } else {
      let displayDefaultCards = this.props.defaultCards.map(card => {
        // console.log('default', card.tcgplayer_id)
        return <Card 
          image = {card.image_uris.normal} 
          id = {card.tcgplayer_id}
        />
      })
      return (
        <section className='card-container'>
          {displayDefaultCards}
        </section>
      )
    }
  }
}

export const mapStateToProps = state => {
  return {
    defaultCards: state.defaultCards,
    searchCards: state.searchCards
  }
}

export default connect(mapStateToProps)(CardContainer);

