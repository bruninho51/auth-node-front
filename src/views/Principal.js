import React from 'react';
import Auth from '../api/auth';
import { Redirect } from 'react-router-dom';
import MenuAppBar from '../components/MenuAppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/PersonAdd';
import AssignmentIcon from '@material-ui/icons/Assignment';

export default class Principal extends React.Component {
    constructor(props) {
        super(props);

        this.component = this.component.bind(this);
    }

    component() {
        return (
            <div>
                <MenuAppBar>
                    <List>
                        <ListItem button>
                            <ListItemIcon><PersonIcon /></ListItemIcon>
                            <ListItemText primary="Cadastrar Perfil" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><AssignmentIcon /></ListItemIcon>
                            <ListItemText primary="Cadastrar Tarefa" />
                        </ListItem>
                    </List>
                </MenuAppBar>
            </div>
        );
    }

    render() {
        return (
            Auth.isAuthenticate() &&
            this.component() ||
            <Redirect to='/login' />
        );
    }
}