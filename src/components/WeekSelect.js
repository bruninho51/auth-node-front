import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardWeek from './CardWeek';

const useStyles = makeStyles(theme => ({}));

export default function WeekSelect(props) {

    const weekDays = [0,1,2,3,4,5,6];
    const classes = useStyles();

    return (
        <div style={{display: 'flex'}}>
            {weekDays.map(weekDay => (
                <CardWeek weekDay={weekDay} />
            ))}
        </div>
    );
}