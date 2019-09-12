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

const TodoList = (props) => {
  return (
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
        {props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </TableBody>
      <TableFooter>
        <TodoForm />
      </TableFooter>
    </Table>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool,
    description: PropTypes.string,
    dueBy: PropTypes.object
  }))
};

export default TodoList;