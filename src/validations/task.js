import * as Yup from 'yup';

const validation = Yup.object().shape({
    name: Yup.string()
        .required('informe o nome da tarefa.')
        .max(35),
    score: Yup.number()
        .required('informe a pontuação.')
        .min(1, 'pontuação deve ser maior que 0.')
});

export default validation;