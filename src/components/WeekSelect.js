import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardWeek from './CardWeek';

const useStyles = makeStyles(theme => ({
    label: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontWeight: 400,
        fontFamily: [
            'Nunito',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
          ].join(','),
        fontSize: '12px',
    },
    fieldset: {
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '5px',
        borderColor: 'rgba(0, 0, 0, 0.28)',
    }
}));

export default function WeekSelect(props) {

    const weekDays = [0,1,2,3,4,5,6];
    const classes = useStyles();

    return (
        <fieldset className={classes.fieldset}>
            <legend className={classes.label}>{props.label}</legend>
            <div style={{display: 'flex'}}>
                {weekDays.map(weekDay => (
                    <CardWeek weekDay={weekDay} />
                ))}
            </div>
        </fieldset>
    );
}