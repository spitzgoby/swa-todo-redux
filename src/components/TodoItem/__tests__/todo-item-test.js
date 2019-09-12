import moment from 'moment';
import React from 'react';
import {shallow} from 'enzyme';
import TodoItem from 'components/TodoItem/component';

test('<TodoItem />', () => {
  const mockTodo = {
    completed: true,
    description: 'test todo item',
    dueBy: moment('2019-01-01T00:00')
  };
  const todoItemWrapper = shallow(<TodoItem todo={mockTodo} />);

  expect(todoItemWrapper).toMatchSnapshot();
});
