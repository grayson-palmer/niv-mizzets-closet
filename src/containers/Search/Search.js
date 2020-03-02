import React, { Component } from 'react';
import './Search.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchCards, loadingCards } from '../../actions';
import { fetchCardsWithSearch } from '../../apiCalls';

export class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchValue: ''
    }
  }

  handleChange = e => {
    this.setState({ searchValue: e.target.value })
  }

  handleClick = () => {
    const { setSearchCards, loadingCards } = this.props;
    fetchCardsWithSearch(this.state.searchValue)
      .then(data => {
        setSearchCards(data.data)
        loadingCards(true);
      })
    this.setState({ searchValue: '' })
    }

  render() {
    return (
      <form className='search'>
        <input 
          className='search__input' 
          type='text' 
          placeholder='Search...' 
          name='searchValue' 
          onChange={this.handleChange}
        />
        <Link 
          to={`/search/${this.state.searchValue}`}
          type='button'
          className='search__button' 
          onClick={() => this.handleClick()}
        >🔎
        </Link>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setSearchCards: (cards) => dispatch(setSearchCards(cards)),
  loadingCards: (loadingStatus) => dispatch(loadingCards(loadingStatus))
})

export default connect(null, mapDispatchToProps)(Search)

