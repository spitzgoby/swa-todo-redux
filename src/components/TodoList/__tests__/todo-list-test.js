import TodoForm from 'components/TodoForm/component';
import TodoList from 'components/TodoList/component';
import { shallow } from 'enzyme';
import { TableBody } from '@material-ui/core';
import React from 'react';

describe('<TodoList />', () => {
    const mockProps = {
        completedTodos: [
            {
                completed: true,
                description: 'todo',
                dueBy: '',
                id: 0
            },
        ],
        retrieveTodos: jest.fn(),
        todos: [1, 2],
        user: 'parent'
    };

    it('should render correctly', () => {
        const wrapper = shallow(<TodoList {...mockProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should call retrieveTodos', () => {
        // coming soon!
    });

    it('should render two todos', () => {
        const wrapper = shallow(<TodoList {...mockProps} />);

        expect(wrapper.find(TableBody).children()).toHaveLength(mockProps.todos.length);
    });

    it('should render TodoForm if user is parent', () => {
        const wrapper = shallow(<TodoList {...mockProps} />);

        expect(wrapper.find(TodoForm)).toBeDefined();
    });

    it('should render completed count', () => {
        const wrapper = shallow(<TodoList {...mockProps} />);

        expect(wrapper.find('.todo-list--completed-count').text())
        .toEqual(`${mockProps.completedTodos.length} of ${mockProps.todos.length} completed`);
    });
})
