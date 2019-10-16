import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Select from '@material-ui/core/Select';
import TodoList from 'components/TodoList';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import './style.scss';

export default (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleFlyoutOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRoleSelection = (event) => {
    props.selectUser(event.target.value)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container className="app">
      <div>
        <Typography variant="h2">
          SWA Todos
        </Typography>
        <Button className="app--role-selector" variant="contained" onClick={handleFlyoutOpen}>
          Select Role
        </Button>
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          id={id}
          onClose={handleClose}
          open={open}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <h2 className="app--popover-title">Select Role</h2>
          <FormControl fullWidth>
            <InputLabel htmlFor="role-selector">Role</InputLabel>
            <Select
              value={props.user}
              onChange={handleRoleSelection}
              inputProps={{
                name: 'role',
                id: 'role-selector'
              }}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={'child'}>Child</MenuItem>
              <MenuItem value={'parent'}>Parent</MenuItem>
            </Select>
          </FormControl>
        </Popover>
      </div>
      <TodoList></TodoList>
    </Container>
  );
};