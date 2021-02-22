import React from 'react';
import { shallow } from 'enzyme';
import Edit from './index';

it('renders title', () => {
    const wrapper = shallow(<Edit />);
    expect(wrapper.props.children[0].type.to.equal('h1'));
    expect(wrapper.props.children[0].props.children[0].type.to.equal('b'));
});
