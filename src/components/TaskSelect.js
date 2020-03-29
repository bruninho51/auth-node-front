import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}));

export default function TaskSelect(props) {

    const [data, setData] = React.useState([]);

    return (
        <Fragment key={input.name}>
            <label>{input.label}</label>
            <div>
                <Field 
                    name={input.name}
                    render={(props) => {
                        const { field } = props;
                        const { errors, touched } = props.form;
                        const hasError = errors[input.name] && touched[input.name] ? classes.hasError : '';

                        return (
                            <div>
                                <textarea {...field} className={hasError} style={{width: '100%'}}></textarea>
                            </div>
                        );
                    }}
                />
            </div>
        </Fragment>
    );
}