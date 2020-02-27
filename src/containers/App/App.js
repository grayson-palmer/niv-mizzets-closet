import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import { CardDetails } from '../../components/CardDetails/CardDetails.js.js';
import { fetchDefaultCards } from '../../apiCalls/';
import { getDefaultCards } from '../../actions';


export class App extends Component {
  constructor() {
    super();
    this.state = {
      defaultCards: [],
      searchCards: []
    }
  }

  componentDidMount() {
    console.log('fetch')
    fetchDefaultCards()
      .then(data => this.props.getDefaultCards(data))
  }

  render() {
    return (
      <main>
        <header>

        </header>
        <body>
          <CardContainer />
        </body>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  defaultCards: state.defaultCards,
  searchCards: state.searchCards
})

export const mapDispatchToProps = dispatch => ({
  getDefaultCards: (defaultCards) => dispatch(getDefaultCards(defaultCards))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
