import React, { Component } from 'react';
import './CardDetails.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setArtistCards, loadSelectedCardInfo, addToFavorites, removeFromFavorites } from '../../actions';
import { fetchCardsWithSearch, fetchCardById } from '../../apiCalls';
import CardContainer from '../../containers/CardContainer/CardContainer.js';
import { Loading } from '../Loading/Loading.js';

export class CardDetails extends Component {
  constructor() {
    super();
  }

  appendToFavorites = () => {
    if(!this.props.favoriteCards.includes(this.props.selectedCardInfo)){
      this.props.addToFavorites(this.props.selectedCardInfo)
    }
  }

  async componentDidMount() {
    await fetchCardById(this.props.selectedCard)
      .then(data => {
        this.props.loadSelectedCardInfo(data);
      })
    await fetchCardsWithSearch(`a:${this.props.selectedCardInfo.artist.replace(/\s/g, '')}`)
      .then(data => {
        this.props.setArtistCards(data.data)
      })
  }

  async componentDidUpdate() {
    if(this.props.selectedCard !== this.props.selectedCardInfo.tcgplayer_id)
    await fetchCardById(this.props.selectedCard)
    .then(data => {
      this.props.loadSelectedCardInfo(data);
    })
  }

  render() {
    if(!this.props.selectedCardInfo.image_uris) {
      return <Loading />
    }
    const { image_uris, name, released_at, set_name, artist, prices } = this.props.selectedCardInfo
    return (
    <section className='card-details'>
      <div className='card-details-info'>
        <img className='card-details-info__image' src={ image_uris.normal } alt={ `image of ${name} card` } />
        <div className='card-details-info__description'>
          <h2>{ name }</h2>
          <h3>Art By: { artist }</h3>
          <p>Release Date: { released_at }</p>
          <p>Set Name: { set_name }</p>
          <p>Current Price: ${ prices.usd }</p>
          {!this.props.favoriteCards.includes(this.props.selectedCardInfo) ? 
          <button 
            className='card-details-info__add-favorite' 
            type='button'
            onClick={this.appendToFavorites}
          >
            Add to Favorites
          </button> : 
          <button 
          className='card-details-info__remove-favorite' 
          type='button'
          onClick={() => this.props.removeFromFavorites(this.props.selectedCardInfo)}
        >
          Remove from Favorites
        </button> }
        </div>
      </div>
      <div className='card-details-info__artist-related'>
        <h3>Other Card Artwork By {artist}</h3>
        <CardContainer />
      </div>
    </section>
    )
  } 
}

const mapStateToProps = state => ({
  selectedCard: state.selectedCard,
  selectedCardInfo: state.selectedCardInfo,
  favoriteCards: state.favoriteCards
})

const mapDispatchToProps = dispatch => ({
  setArtistCards: (artistCards) => dispatch(setArtistCards(artistCards)),
  loadSelectedCardInfo: (card) => dispatch(loadSelectedCardInfo(card)),
  addToFavorites: (card) => dispatch(addToFavorites(card)),
  removeFromFavorites: (card) => dispatch(removeFromFavorites(card))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardDetails));