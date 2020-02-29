import React, { Component } from 'react';
import './Search.scss';
import { connect } from 'react-redux';
import { setSearchCards } from '../../actions';
import { fetchCardsWithSearch } from '../../apiCalls';

export class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchValue: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = () => {
    fetchCardsWithSearch(this.state.searchValue)
      .then(data => {
        this.props.setSearchCards(data.data)
        this.setState({ searchValue: '' })
      })
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
        <button 
          type='button'
          className='search__button' 
          onClick={() => this.handleClick()}
        >🔎
        </button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setSearchCards: (cards) => dispatch(setSearchCards(cards))
})

export default connect(null, mapDispatchToProps)(Search)

