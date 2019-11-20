import TodoForm from 'components/TodoForm/component';
import TodoList from 'components/TodoList/component';
import { shallow } from 'enzyme';
import { Button, TableBody } from '@material-ui/core';
import React from 'react';

describe('<TodoList />', () => {
    const clearCompletedTodosSpy = jest.fn();

    const mockProps = {
        clearCompletedTodos: clearCompletedTodosSpy,
        completedTodos: [
            {
                completed: true,
                description: 'todo',
                dueBy: '',
                id: 0
            },
        ],
        retrieveTodos: jest.fn(),
        todos: [],
        user: 'parent'
    };
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TodoList {...mockProps} />);
    });

    it('should render correctly with no todos', () => {
        expect(wrapper).toMatchSnapshot('no-todos');
    });

    it('should render correctly with two todos', () => {
        wrapper = shallow(<TodoList {...mockProps} todos={[1, 2]} />);

        expect(wrapper).toMatchSnapshot('two-todos');
    });

    it('should call retrieveTodos', () => {
        // coming soon!
    });

    it('should render two todos', () => {
        expect(wrapper.find(TableBody).children()).toHaveLength(mockProps.todos.length);
    });

    it('should render TodoForm if user is parent', () => {
        expect(wrapper.find(TodoForm)).toBeDefined();
    });

    it('should render completed count', () => {
        expect(wrapper.find('.todo-list--completed-count').text())
        .toEqual(`${mockProps.completedTodos.length} of ${mockProps.todos.length} completed`);
    });

    it('should clear completed todos', () => {
        wrapper.find(Button).simulate('click', {});

        expect(clearCompletedTodosSpy).toHaveBeenCalled();
    });
})
