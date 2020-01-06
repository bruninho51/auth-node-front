import React from 'react';
import moment from 'moment/moment';
import validator from '../api/validators/profile';
import Profile from '../api/Profile';
import Principal from '../components/Principal';
import Container from '@material-ui/core/Container';
import { withFormik, Form, Field } from 'formik';


const MyFormWithFormik = withFormik({
    mapPropsToValues: () => ({
        nickname: '',
        dateOfBird: moment().format('YYYY-mm-dd'),
        pwd: '',
        confirmPwd: '',
        score: 0
    }),
    handleSubmit: values => {
        let errors = validator.validate(values);
        if(!error) {
            Profile.save(values);
        }
    }
});

const Form = () => (
    <Form>
        <Field type="text" name="nickname" />
        <Field type="password" name="pwd" />
        <Field type="password" name="confirmPwd" />
        <Field type="date" name="dateOfBird" />
        <Field type="number" name="score" />
        <button type="submit">Submit</button>
    </Form>
);

export default class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Principal>
                <Container>
                    {MyFormWithFormik(Form)}
                </Container>
            </Principal>
        );
    }
}

export default ProfileForm;