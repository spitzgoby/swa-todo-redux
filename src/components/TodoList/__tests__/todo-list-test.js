import _ from 'lodash';
import React, { useEffect } from 'react';
import {shallow} from 'enzyme';
import TodoList from 'components/TodoList/component';
import { TableBody } from '@material-ui/core';
import TodoForm from 'components/TodoForm/component';

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
    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };
    let useEffect;

    beforeEach(() => {
        useEffect = jest.spyOn(React, 'useEffect');
        
        mockUseEffect();
    });

    it('should render correctly', () => {    
        const appWrapper = shallow(<TodoList {...mockProps} />);

        expect(appWrapper).toMatchSnapshot();
    });

    it('should call retrieveTodos', () => {
        expect(mockProps.retrieveTodos).toHaveBeenCalled();
    });
    
    it('should render two todos', () => {
        const appWrapper = shallow(<TodoList {...mockProps} />);
        
        expect(appWrapper.find(TableBody).children()).toHaveLength(mockProps.todos.length);
    });

    it('should render TodoForm if user is parent', () => {
        const appWrapper = shallow(<TodoList {...mockProps} />);

        expect(appWrapper.find(TodoForm)).toBeDefined();
    });

    it('should render completed count', () => {
        const appWrapper = shallow(<TodoList {...mockProps} />);

        expect(appWrapper.find('.todo-list--completed-count').text())
        .toEqual(`${mockProps.completedTodos.length} of ${mockProps.todos.length} completed`);
    });
})