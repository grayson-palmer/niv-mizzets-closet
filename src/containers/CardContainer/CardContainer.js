import React, { Component } from 'react';
import './CardContainer.scss';
import { connect } from 'react-redux';

export class CardContainer extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section>
        <h2>CardContainer</h2>
        <h1>test</h1>
      </section>
    )
  }
}

export const mapStateToProps = state => {
  return {
    searchCards: state.searchCards
  }
}

export default connect(mapStateToProps)(CardContainer);

