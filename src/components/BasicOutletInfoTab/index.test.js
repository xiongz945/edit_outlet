import React from 'react';
import { shallow } from 'enzyme';
import { BasicOutletInfoTab } from './index';

it('renders basic outlet info tab', () => {
    const wrapper = shallow(<BasicOutletInfoTab.WrappedComponent outlet={{brandName:"test", outletName:"test", address:"test address", "phoneNumber":"12345", serviceOptions:[] }} />);
    expect(wrapper.find('Form').props.initialValues["brand-name"]).toEqual("test");
});