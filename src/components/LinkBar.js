import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Redirect, Link } from 'react-router-dom';

export default class LinkBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let props = this.props;
        return (
            <Link 
                to={this.props.to}
                style={{textDecoration: "none", color: '#6C6C6C'}}
            >
                <ListItem button>
                    <ListItemIcon>{props.icon}</ListItemIcon>
                    <ListItemText primary={props.value} />
                </ListItem>
            </Link>
        );
    }
}