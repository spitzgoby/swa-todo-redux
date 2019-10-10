import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TodoItem = (props) => {
  const {todo} = props;

  const handleCompleteCheckboxClicked = () => {
      const todo = props.todo;

      props.completeTodo(todo.id, !todo.completed);
  };

  const handleDeleteButtonClicked = () => {
      props.deleteTodo(props.todo.id);
  };

  return (
    <TableRow>
      <TableCell>
        <Checkbox onChange={handleCompleteCheckboxClicked} checked={todo.completed} />
      </TableCell>
      <TableCell>
        {todo.description}
      </TableCell>
      <TableCell>
        {todo.dueBy ? moment(todo.dueBy).format('MMM DD hh:mm') : ''}
      </TableCell>
      <TableCell>
        <IconButton color="secondary" onClick={handleDeleteButtonClicked}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

TodoItem.propTypes = {
  completeTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  todo: PropTypes.shape({
    completed: PropTypes.bool,
    description: PropTypes.string,
    dueBy: PropTypes.string,
    id: PropTypes.string.isRequired
  }).isRequired
};

export default TodoItem;
