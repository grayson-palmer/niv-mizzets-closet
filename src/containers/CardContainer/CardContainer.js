import React, { Component } from 'react';
import './CardContainer.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card } from '../../components/Card/Card.js';
import { setSelectedCard, clearSelectedCardInfo } from '../../actions';

export class CardContainer extends Component {
  constructor() {
    super()
  }

  render() {
    if (this.props.artistCards.length > 0 && this.props.location.pathname.includes('cards')) {
      let displayArtistCards = this.props.artistCards.map(card => {
        if (card.image_uris) {
          return <Card 
          image = {card.image_uris.normal} 
          name = {card.name}
          key = {card.tcgplayer_id}
          id = {card.tcgplayer_id}
          setSelectedCard = {this.props.setSelectedCard}
          clearSelectedCardInfo = {this.props.clearSelectedCardInfo}
          />
        }
      })
      return (
        <section className='card-container'>
          {displayArtistCards}
        </section>
      )
    } else {
      let displaySearchCards = this.props.searchCards.map(card => {
        return <Card 
          image = {card.image_uris.normal} 
          name = {card.name}
          key = {card.tcgplayer_id}
          id = {card.tcgplayer_id}
          setSelectedCard = {this.props.setSelectedCard}
          clearSelectedCardInfo = {this.props.clearSelectedCardInfo}
        />
      })
      return (
        <section className='card-container'>
          {displaySearchCards}
        </section>
      )
    }
  }
} 

export const mapStateToProps = state => {
  return {
    searchCards: state.searchCards,
    artistCards: state.artistCards
  }
}

export const mapDispatchToProps = dispatch => ({
  setSelectedCard: (id) => dispatch(setSelectedCard(id)),
  clearSelectedCardInfo: () => dispatch(clearSelectedCardInfo())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardContainer));

