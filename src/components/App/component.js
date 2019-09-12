import Container from '@material-ui/core/Container';
import TodoList from '../TodoList';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import './style.scss';

export default () => {
  return (
    <Container className="app"> 
      <Typography variant="h2">
        Todo
      </Typography>
      <TodoList></TodoList>
    </Container>
  ); 
};