import * as Yup from 'yup';

const validation = Yup.object().shape({
    nickname: Yup.string()
        .required('informe o nome de usuário.')
        .max(35),
    pwd: Yup.string()
        .required('informe a senha.')
        .max(35),
    confirmPwd: Yup.string()
        .required('confirme a senha.')
        .oneOf([Yup.ref('pwd')], 'confirmação de senha inválida.'),
    dateOfBird: Yup.date()
        .typeError('data inválida.')
        .required('informe a data de nascimento.'),
    score: Yup.number().integer()
        .required('infome a pontuação inicial.')
});

export default validation;