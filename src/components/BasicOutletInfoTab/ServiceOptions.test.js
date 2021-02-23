import React from 'react';
import { shallow, configure } from 'enzyme';
import ServiceOptions from './ServiceOptions';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it("renders service options", ()=>{
    const wrapper = shallow(<ServiceOptions />);
    expect(wrapper.find("Row").length).toBe(2);
    expect(wrapper.find("Divider").length).toBe(1);
    expect(wrapper.find("Col").length).toBe(2);
    expect(wrapper.find("Checkbox").text()).toEqual("All");
});