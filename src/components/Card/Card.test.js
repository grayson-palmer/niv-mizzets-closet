import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card.js';

describe('Card', () => {
  let wrapper;
  let passedProps = {setSelectedCard: jest.fn()}

  beforeEach(() => {
    wrapper = shallow(<Card {...passedProps} />)
  })

  it ('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it ('should call the setSelectedCard function when link is clicked', () => {
    wrapper.find('.card').simulate('click');
    expect(passedProps.setSelectedCard).toHaveBeenCalled();
  })
})