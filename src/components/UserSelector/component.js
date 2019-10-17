import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import React from 'react';
import Select from '@material-ui/core/Select';

import './style.scss';

const UserSelector = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'user-popover' : undefined;

    const getPopoverProps = () => ({
        anchorEl: anchorEl,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
        },
        classname: 'user-selector--popover',
        id: id,
        onClose: handleClose,
        open: open,
        transformOrigin: {
            vertical: 'top',
            horizontal: 'center'
        }
    });

    const getSelectProps = () => ({
        value: props.user,
        onChange: handleRoleSelection,
        inputProps: {
            name: 'role',
            id: 'role-selector'
        }
    });

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
        <div className="user-selector">
            <Button className="user-selector--role-selector" variant="outlined" onClick={handleFlyoutOpen}>
                Select Role
            </Button>
            <Popover {...getPopoverProps()}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="role-selector">Role</InputLabel>
                    <Select {...getSelectProps()}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={'child'}>Child</MenuItem>
                        <MenuItem value={'parent'}>Parent</MenuItem>
                    </Select>
                </FormControl>
            </Popover>
        </div>
    );
}

export default UserSelector;
