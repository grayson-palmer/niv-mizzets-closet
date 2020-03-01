import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer.js';
import { CardDetails } from '../../components/CardDetails/CardDetails.js';
import { Header } from '../../components/Header/Header.js';
import { Loading } from '../../components/Loading/Loading.js';
import { fetchDefaultCards } from '../../apiCalls/';
import { getDefaultCards, loadingCards } from '../../actions';


export class App extends Component {
  constructor() {
    super();
    this.state = {
      defaultCards: [],
      searchCards: []
    }
  }

  componentDidMount() {
    fetchDefaultCards()
      .then(data => {
        this.props.getDefaultCards(data.data)
        this.props.loadingCards(true)
      })
  }

  render() {
    if (this.props.loadingStatus) {
      return (
        <main>
          <Header />
          <Loading />
        </main>
      );
    }
    return (
        <main>
          <Header />
          <CardContainer />
        </main>
    );
  }
}

export const mapStateToProps = state => ({
  defaultCards: state.defaultCards,
  searchCards: state.searchCards,
  loadingStatus: state.loadingStatus
})

export const mapDispatchToProps = dispatch => ({
  getDefaultCards: (defaultCards) => dispatch(getDefaultCards(defaultCards)),
  loadingCards: (loadingStatus) => dispatch(loadingCards(loadingStatus))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
