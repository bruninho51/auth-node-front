import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
      cursor: 'pointer',
      flexGrow: 1.25,
      width: '100px',
      position: 'relative',
      userSelect: 'none',
      marginLeft: '2px',
    },
    check: {
        position: 'absolute',
        bottom: '2px',
        left: '2px',
    },
    weekDayWord: {
        textAlign: 'center',
    }
}));

export default function CardWeek(props) {

    const week = [
        'Domingo', 
        'Segunda-Feira', 
        'Terça-Feira', 
        'Quarta-Feira', 
        'Quinta-Feira', 
        'Sexta-Feira', 
        'Sábado'
    ];

    const [selected, setSelected] = React.useState(false);

    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.card} onClick={() => setSelected(!selected)}>
            <CardContent>
                <Typography variant="h1" component="h1" className={classes.weekDayWord}>
                    {week[props.weekDay].charAt(0)}
                </Typography>
                <Typography color="textSecondary">
                    {week[props.weekDay]}
                </Typography>
                <input type="checkbox" className={classes.check} name={`weekDay_${props.weekDay}`} checked={selected} />
            </CardContent>
        </Card>
    );
}