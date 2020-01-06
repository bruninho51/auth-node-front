import React from 'react';
import Principal from '../components/Principal';
import DynamicForm from '../components/DynamicForm';
import validation from '../validations/validation';
import Container from '@material-ui/core/Container';

export default class CadProfile extends React.Component {
    constructor(props) {
        super(props);
        this.fields = [
            {label: "Nome", type: "input", name: "firstName", value: ""},
            {label: "Sobrenome", type: "input", name: "lastName", value: ""},
            {label: "Rua", type: "input", name: "address", value: ""},
            {label: "Cidade", type: "input", name: "city", value: ""},
            {label: "Ocupação", type: "select", name: "ocuppation", data: ['Professor', 'Engenheiro', 'Programador', 'Médico', 'Advogado']},
            {label: "Mensagem", type: "textarea", name: "message", value: ""},
            {label: "Aceito os termos e condições", type: "checkbox", name: "terms", value: false}
        ];
    }

    render() {
        return (
            <Principal>
                <Container>
                    <DynamicForm 
                        fields={this.fields} 
                        validation={validation} 
                    />
                </Container>
            </Principal>
        );
    }
}