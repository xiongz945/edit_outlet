import React from 'react';
import { shallow, configure } from 'enzyme';
import BasicInfo from './BasicInfo';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
it("renders basic info", () => {
    const wrapper = shallow(<BasicInfo />);
    expect(wrapper.find('BasicInfoForm').length).toBe(1);
})