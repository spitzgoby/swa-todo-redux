import React from 'react';
import {shallow} from 'enzyme';
import TodoItem from 'components/TodoItem/component';
import TodoList from 'components/TodoList/component';

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
        todos: [1, 2]
};

    it('should render correctly', () => {    
        const appWrapper = shallow(<TodoList {...mockProps} />);

        expect(appWrapper).toMatchSnapshot();
    })
    
    it('should be selectable by class "todo-list"', () => {
        const appWrapper = shallow(<TodoList {...mockProps} />);

        expect(appWrapper.is('.todo-list')).toBe(true);
    });

    // TODO: WIP
    // it('should render two todos', () => {
    //     const appWrapper = shallow(<TodoList {...mockProps} />);
        
    //     expect(appWrapper.find(TodoItem)).to.have.lengthOf(2);
    // });
})