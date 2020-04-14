import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
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
        borderColor: 'rgba(0, 0, 0, 0.28)'
    },
    fieldsetFlex: {
        display: 'flex',
        flexGrow: 1
    }
};

class Fieldset extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const props = this.props;
        const { classes } = props;

        return (
            <fieldset className={[
                classes.fieldset, 
                props.flex ? 
                    classes.fieldsetFlex : 
                    ''
            ].join(' ')}>
                <legend className={ classes.label }>{ props.label }</legend>
                { props.children }
            </fieldset>
        );
    }
}

export default withStyles(styles)(Fieldset);