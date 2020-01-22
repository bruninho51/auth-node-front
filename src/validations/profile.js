import * as Yup from 'yup';

const validation = Yup.object().shape({
    nickname: Yup.string()
        .required()
        .max(35),
    pwd: Yup.string()
        .required()
        .max(35),
    confirmPwd: Yup.string()
        .required()
        .oneOf([Yup.ref('pwd')], 'Senha não confere!'),
    dateOfBird: Yup.date()
        .required(),
    score: Yup.number().integer()
        .required('required')
});

export default validation;