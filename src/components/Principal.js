import React from 'react';
import Auth from '../api/Auth';
import MenuAppBar from '../components/MenuAppBar';
import List from '@material-ui/core/List';
import LinkBar from '../components/LinkBar';
import PersonIcon from '@material-ui/icons/PersonAdd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import HistoryIcon from '@material-ui/icons/History';

export default class Principal extends React.Component {
    constructor(props) {
        super(props);

        this.links = [
            {to: '/', icon: <HomeIcon />, value: 'Início'},
            {to: '/profile', icon: <PersonIcon />, value: 'Cadastrar Perfil'},
            {to: '/task', icon: <AssignmentIcon />, value: 'Cadastrar Tarefa'},
            {to: '/', icon: <LowPriorityIcon />, value: 'Sortear Tarefas'},
            {to: '/task/week', icon: <DateRangeIcon />, value: 'Tarefas Por Dia da Semana'},
            {to: '/', icon: <FormatListNumberedIcon />, value: 'Tarefas de Hoje'},
            {to: '/', icon: <HistoryIcon />, value: 'Histórico'}
        ];
    }

    render() {
        return Auth.ifAuthenticatedLoad(
            <div>
                <MenuAppBar title={this.props.title}>
                    <List>
                        {this.links.map(link => (
                            <LinkBar to={link.to} icon={link.icon} value={link.value} />
                        ))}
                    </List>
                </MenuAppBar>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}