import TodoList from 'components/TodoList/component';
import React from 'react';
import {shallow} from 'enzyme';

describe('<TodoList />', () => {
    const mockProps = {
        todos: [
                    {
                        completed: false,
                        description: 'todo',
                        dueBy: '',
                        id: 0
                    },
                    {
                        completed: false,
                        description: 'todo',
                        dueBy: '',
                        id: 1
                    }
                ],
        completedTodos: [
            {
                completed: true,
                description: 'todo',
                dueBy: '',
                id: 0
            },
        ]
};
    const appWrapper = shallow(<TodoList {...mockProps} />);

    it('should render correctly', () => {    
        expect(appWrapper).toMatchSnapshot();
    })
    
    it('should be selectable by class "todo-list"', () => {
        expect(shallow(<TodoList {...mockProps} />).is('.todo-list')).toBe(true);
    });
})