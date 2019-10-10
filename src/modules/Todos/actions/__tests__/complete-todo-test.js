import {completeTodo} from '../complete-todo';
import {types} from '../types';

describe('completeTodo()', () => {
    it('should create an action with the correct type and payload', () => {
        const mockCompleted = true;
        const mockId = 1;

        expect(completeTodo(mockId, mockCompleted)).toEqual({
            type: types.COMPLETE_TODO,
            payload: {
                completed: mockCompleted,
                id: mockId
            }
        });
    });
});
