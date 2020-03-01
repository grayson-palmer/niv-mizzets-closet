import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer.js';
import CardDetails from '../../components/CardDetails/CardDetails.js';
import { Header } from '../../components/Header/Header.js';
import { Loading } from '../../components/Loading/Loading.js';
import { fetchDefaultCards, fetchCardsWithSearch } from '../../apiCalls/';
import { setSearchCards, loadingCards, resetSearchCards } from '../../actions';


export class App extends Component {
  constructor() {
    super();
  }

  resetWithDefaultCards = () => {
    const { resetSearchCards, loadingCards } = this.props;
    resetSearchCards();
    loadingCards(true);
  }

  componentDidMount() {
    const { searchCards, setSearchCards, loadingCards } = this.props;
    if (searchCards && searchCards.length > 0) {
      fetchCardsWithSearch()
      .then(data => {
        setSearchCards(data.data)
        loadingCards(true)
      })
    } else {
      fetchDefaultCards()
        .then(data => {
          setSearchCards(data.data)
          loadingCards(true)
        })
    }
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
          <Header  />
          <Switch>
            <Route
              path='/cards/:id'
              render={() => <CardDetails />} />
              {/* // render={ ({ match }) => 
              //   <CardDetails
              //     selectedCard={ match.params.id }/> } /> */}
            <Route
              path='/'
              // render={() => <CardContainer resetWithDefaultCards={() => this.resetWithDefaultCards()} />}>
              render={() => <CardContainer />} />
          </Switch>
        </main>
    );
  }
}

export const mapStateToProps = state => ({
  searchCards: state.searchCards,
  loadingStatus: state.loadingStatus,
  selectedCard: state.selectedCard
})

export const mapDispatchToProps = dispatch => ({
  // getDefaultCards: (defaultCards) => dispatch(getDefaultCards(defaultCards)),
  setSearchCards: (defaultCards) => dispatch(setSearchCards(defaultCards)),
  loadingCards: (loadingStatus) => dispatch(loadingCards(loadingStatus)),
  resetSearchCards: () => dispatch(resetSearchCards())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
