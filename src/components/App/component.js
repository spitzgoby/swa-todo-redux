import Container from '@material-ui/core/Container';
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import TodoList from 'components/TodoList';
import Typography from '@material-ui/core/Typography';
import UserSelector from 'components/UserSelector';

import './style.scss';

export default (props) => {

  const getTodoDeletedSnackbarProps = () => ({
    anchorOrigin: {
        horizontal: 'right',
        vertical: 'top'
    },
    ContentProps: {
        className: 'app--snackbar_successful'
    },
    message: 'Todo successfully deleted',
    open: props.recentlyDeletedTodo
  });

  const getTodoDeleteFailedSnackbarProps = () => ({
    anchorOrigin: {
        horizontal: 'right',
        vertical: 'top'
    },
    ContentProps: {
        className: 'app--snackbar_failure'
    },
    message: 'Error deleting Todo',
    open: props.errorDeletingTodo
  });

  return (
    <Container className="app">
      <div>
        <Snackbar {...getTodoDeletedSnackbarProps()} />
        <Snackbar {...getTodoDeleteFailedSnackbarProps()}>
        </Snackbar>
        <Typography variant="h2">
          SWA Todos
        </Typography>
        <UserSelector />
      </div>
      <TodoList></TodoList>
    </Container>
  );
};
