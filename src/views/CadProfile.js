import React from 'react';
import Principal from '../components/Principal';
import DynamicForm from '../components/DynamicForm';
import validation from '../validations/profile';
import Container from '@material-ui/core/Container';

export default class CadProfile extends React.Component {
    constructor(props) {
        super(props);
        this.fields = [
            {label: "Usuário", type: "input", name: "nickname", value: ""},
            {label: "Senha", type: "password", name: "pwd", value: ""},
            {label: "Confirmar Senha", type: "password", name: "confirmPwd", value: ""},
            {label: "Data de Nascimento", type: "date", name: "dateOfBird", value: ""},
            {label: "Pontuação", type: "number", name: "score", min: 0, value: 0}
        ];
    }

    render() {
        return (
            <Principal>
                <Container>
                    <DynamicForm 
                        fields={this.fields} 
                        title="Cadastrar Perfil"
                        btnName="Salvar"
                        validation={validation}
                    />
                </Container>
            </Principal>
        );
    }
}