import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Box, Chip } from '@material-ui/core';

const styles = {
    card: {
        marginTop: '2px',
        marginBottom: '2px'
    },
    chip: {
        margin: '2px',
    }
};

class CardWeek extends React.Component {
    constructor(props) {
        super(props);
        this.weekDays = {
            dom: 'Domingo', 
            seg: 'Segunda', 
            ter: 'Terça', 
            qua: 'Quarta', 
            qui: 'Quinta', 
            sex: 'Sexta', 
            sab: 'Sábado'
        };
    }

    render() {

        const { classes } = this.props;
        console.log(this.props);
        return (
            <Card className={ classes.card }>
                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <p>{ this.props.name }</p>
                        <section className="weekDays">
                            {Object.keys(this.weekDays).map(day => (
                                <Chip
                                    key={day}
                                    className={classes.chip}
                                    clickable
                                    color={this.props.tasksWeeks && this.props.tasksWeeks[day] ? 'primary' : 'default'}
                                    label={this.weekDays[day].slice(0,1)}
                                    variant='default'
                                    onClick={() => {
                                        this.props.handleClick(day, this.props.id);
                                    }}
                              /> 
                            ))}
                        </section>
                    </Box>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(CardWeek);