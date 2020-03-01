import React, { Component } from 'react';
import './CardDetails.scss';
import { connect } from 'react-redux';
import { setArtistCards, loadSelectedCardInfo } from '../../actions';
import { fetchCardsWithSearch, fetchCardById } from '../../apiCalls';
import CardContainer from '../../containers/CardContainer/CardContainer.js';
import { Loading } from '../Loading/Loading.js';

export class CardDetails extends Component {
  constructor() {
    super();
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
      <div className='card-details__info'>
        <img src={ image_uris.normal } alt={ `image of ${name} card` } />
        <div className='card-details__description'>
          <h2>{ name }</h2>
          <h3>Art By: { artist }</h3>
          <p>Release Date: { released_at }</p>
          <p>Set Name: { set_name }</p>
          <p>Current Price: ${ prices.usd }</p>
        </div>
      </div>
      <div className='card-details__artist-related'>
        <CardContainer />
      </div>
    </section>
    )
  } 
}

const mapStateToProps = state => ({
  artistCards: state.artistCards,
  selectedCard: state.selectedCard,
  selectedCardInfo: state.selectedCardInfo
})

const mapDispatchToProps = dispatch => ({
  setArtistCards: (artistCards) => dispatch(setArtistCards(artistCards)),
  loadSelectedCardInfo: (card) => dispatch(loadSelectedCardInfo(card))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);