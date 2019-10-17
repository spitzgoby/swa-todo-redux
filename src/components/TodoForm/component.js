import Button from '@material-ui/core/Button';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

const TodoForm = (props) => {
  const getEmptyTodoForm = () => {
    return {
      description: '',
      dueBy: moment().add(2, 'hours').startOf('hour').format('YYYY-MM-DDTHH:mm')
    }
  }

  const [form, setForm] = useState(getEmptyTodoForm());

  const getTextFieldProps = (field) => {
    return {
      onChange: (event) => handleTextFieldChange(field, event),
      value: form[field]
    }
  };

  const handleTextFieldChange = (field, event) => {
    setForm({
      ...form,
      [field]: event.target.value
    });
  };

  const handleAddClick = () => {
    props.addTodo(form);
    setForm(getEmptyTodoForm());
  };

  return (
    <TableRow>
      <TableCell>
        Add a new task
      </TableCell>
      <TableCell>
        <TextField {...getTextFieldProps('description')}/>
      </TableCell>
      <TableCell>
        <TextField type="datetime-local" {...getTextFieldProps('dueBy')} />
      </TableCell>
      <TableCell>
        <Button color="primary" onClick={handleAddClick} variant="contained">
          Add
        </Button>
      </TableCell>
    </TableRow>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
