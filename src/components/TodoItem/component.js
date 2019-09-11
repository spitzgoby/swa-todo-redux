import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TodoItem = (props) => {
  const {todo} = props;

  return (
    <TableRow>
      <TableCell>
        <Checkbox checked={todo.completed} />
      </TableCell>
      <TableCell>
        {todo.description}
      </TableCell>
      <TableCell>
        {todo.dueBy}
      </TableCell>
    </TableRow>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool,
    description: PropTypes.string,
    dueBy: PropTypes.string
  })
};

export default TodoItem;