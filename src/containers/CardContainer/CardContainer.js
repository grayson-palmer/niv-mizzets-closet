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
    console.log(this.props)
    if (this.props.location.pathname.includes('cards')) {
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
          {this.props.artistCards.length > 1 ?
            displayArtistCards : 
            <p>No other cards by this artist</p>}
        </section>
      )
    } else if (this.props.location.pathname.includes('favorites')) {
      let displayFavoriteCards = this.props.favoriteCards.map(card => {
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
          {this.props.favoriteCards.length > 0 ? 
            displayFavoriteCards : 
            <p>Please search for a card to add to your favorites</p>}
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
    artistCards: state.artistCards,
    favoriteCards: state.favoriteCards
  }
}

export const mapDispatchToProps = dispatch => ({
  setSelectedCard: (id) => dispatch(setSelectedCard(id)),
  clearSelectedCardInfo: () => dispatch(clearSelectedCardInfo())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardContainer));

