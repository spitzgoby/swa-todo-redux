import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TodoForm from 'components/TodoForm';
import TodoItem from 'components/TodoItem';
import Typography from '@material-ui/core/Typography';

import './style.scss';

const TodoList = (props) => {

  React.useEffect(() => {
      props.retrieveTodos()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getClearTodosButtonProps = () => {
    return {
      className: 'todo-list--clear-todos-button',
      onClick: () => {},
      variant: 'outlined'
    };
  };

  return (
    <div className="todo-list">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Completed
            </TableCell>
            <TableCell>
              Description
            </TableCell>
            <TableCell>
              Due By
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {props.todos.map(todoId => <TodoItem key={todoId} todoId={todoId} />)}
        </TableBody>
        <TableFooter>
            { props.user === 'parent' ? <TodoForm /> : null }
        </TableFooter>
      </Table>
      <Typography className="todo-list--completed-count" variant="overline">
        {props.completedTodos.length} of {props.todos.length} completed
      </Typography>
      <Button {...getClearTodosButtonProps()}>
        Clear Completed Todos
      </Button>
    </div>
  );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    user: PropTypes.string
};

export default TodoList;
