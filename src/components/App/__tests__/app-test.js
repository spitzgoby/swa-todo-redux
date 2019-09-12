import App from 'components/App/component';
import React from 'react';
import {shallow} from 'enzyme';

test('<App />', () => {
  const appWrapper = shallow(<App />);

  expect(appWrapper).toMatchSnapshot();
})