import React from 'react';
import Profile from '../api/Profile';
import Principal from '../components/Principal';
import DynamicForm from '../components/DynamicForm';
import validation from '../validations/profile';
import Container from '@material-ui/core/Container';
import { ErrorStackedbar, SuccessStackedbar } from '../components/Alert';

export default class CadProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            created: false,
            success: '',
            error: ''
        };
        this.fields = [
            {label: "Usuário", type: "input", name: "nickname", value: ""},
            {label: "Senha", type: "password", name: "pwd", value: ""},
            {label: "Confirmar Senha", type: "password", name: "confirmPwd", value: ""},
            {label: "Data de Nascimento", type: "date", name: "dateOfBird", value: ""},
            {label: "Pontuação", type: "number", name: "score", min: 0, value: 0}
        ];
    }
    
    handleError = () => {
        this.setState({ isError: false });
    };
    
    handleSuccess = () => {
        this.setState({ created: false });
    };
    
    handleSubmit = (values, {resetForm}) => {
      let $this = this;
      Profile.save(values).then(function(response) {
          $this.setState({
              error: false,
              isError: false,
              created: true,
              success: 'Perfil criado com sucesso!'
          });
          resetForm({});
      }).catch(function(err) {
          let error = 'Verifique sua conexão.';
          if(err.response.data) {
              error = err.response.data.message;
          }
          $this.setState({
              error: error,
              isError: true,
              created: false
          });
      });
    };

    render() {
        return (
            <Principal title="Cadastrar Perfil">
                <Container>
                    <DynamicForm 
                        fields={this.fields} 
                        title="Cadastrar Perfil"
                        btnName="Salvar"
                        validation={validation}
                        handleSubmit={this.handleSubmit}
                    />
                </Container>
                <ErrorStackedbar open={this.state.isError} handleClose={this.handleError}>
                    {this.state.error}
                </ErrorStackedbar>
                <SuccessStackedbar open={this.state.created} handleClose={this.handleSuccess}>
                    {this.state.success}
                </SuccessStackedbar>
            </Principal>
        );
    }
}