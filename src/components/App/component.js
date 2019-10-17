import Container from '@material-ui/core/Container';
import React from 'react';
import UserSelector from 'components/UserSelector';
import TodoList from 'components/TodoList';
import Typography from '@material-ui/core/Typography';

import './style.scss';

export default () => {
  return (
    <Container className="app">
      <div>
        <Typography variant="h2">
          SWA Todos
        </Typography>
        <UserSelector />
      </div>
      <TodoList></TodoList>
    </Container>
  );
};