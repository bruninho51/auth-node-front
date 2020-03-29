import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Redirect } from 'react-router-dom';
import Auth from '../api/Auth';
import IconButton from '@material-ui/core/IconButton';

export default function PerfilMenuItem(props) {

    const [redirect, setRedirect] = React.useState(false);

    const renderRedirect = () => {
        if (redirect) {
          return <Redirect to='/target' />
        }
    }
    
    const handleMenu = event => {
        props.setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        props.setAnchorEl(null);
    };

    const logout = () => {
        Auth.logout();
        setRedirect(true);
    };

    return (
        <React.Fragment>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
            <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={props.anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={props.open}
                onClose={handleClose}
            >
                {renderRedirect()}
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
                <MenuItem onClick={logout}>Sair</MenuItem>
            </Menu>
        </React.Fragment>
    );
}