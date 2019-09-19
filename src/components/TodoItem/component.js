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

  return (
    <TableRow>
      <TableCell>
        <Checkbox onChange={handleCompleteCheckboxClicked} checked={todo.completed} />
      </TableCell>
      <TableCell>
        {todo.description}
      </TableCell>
      <TableCell>
        {moment(todo.dueBy).format('MMM DD hh:mm')}
      </TableCell>
      <TableCell>
        <IconButton color="secondary">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool,
    description: PropTypes.string,
    dueBy: PropTypes.string
  }).isRequired
};

export default TodoItem;
