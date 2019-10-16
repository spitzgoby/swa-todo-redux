import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Select from '@material-ui/core/Select';

const UserSelector = (props) => {
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
        <div>
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
    );
}

export default UserSelector;