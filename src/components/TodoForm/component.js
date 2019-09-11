import React from 'react';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

const TodoForm = (props) => {
  return (
    <TableRow>
      <TableCell>
        Add a new task
      </TableCell>
      <TableCell>
        <TextField />
      </TableCell>
      <TableCell>
        <TextField type="datetime-local" />
      </TableCell>
      <TableCell>
        <Button variant="contained">
          Add
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TodoForm;