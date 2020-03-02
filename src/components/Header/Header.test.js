import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header.js';

describe('Header', () => {
  let wrapper;
  let passedProps = {resetWithDefaultCards: jest.fn()}

  beforeEach(() => {
    wrapper = shallow(<Header {...passedProps}/>)
  })

  it ('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  // Having same problem as in Card test where cannot mock passed method
  it ('should call the resetWithDefaultCards function when link is clicked', () => {
    wrapper.find('.header__title').simulate('click');
    expect(passedProps.resetWithDefaultCards).toHaveBeenCalled();
  })
})