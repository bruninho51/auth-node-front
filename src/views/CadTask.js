import React from 'react';
import Principal from '../components/Principal';
import DynamicForm from '../components/form/DynamicForm';
import validation from '../validations/task';
import Container from '@material-ui/core/Container';
import Task from "../api/Task";
import { ErrorStackedbar, SuccessStackedbar } from '../components/Alert';

export default class CadTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            created: false,
            success: '',
            error: ''
        };
        this.fields = [
            {label: "Nome", type: "input", name: "name", value: ""},
            {label: "Pontuação", type: "number", name: "score", min: 1, value: 1},
            {label: "Idade Mínima", type: "number", name: "minimumAge", min: 0, value: 0},
            {label: "Descrição", type: "input", name: "description", value: "", multiline: true, rows: 2}
        ];
    }

    handleError = () => {
       this.setState({ isError: false });
    };

    handleSuccess = () => {
       this.setState({ created: false });
    };

    handleSubmit = (values, { resetForm }) => {
      let $this = this;
      Task.save(values).then(function(request) {
          $this.setState({
              error: false,
              isError: false,
              created: true,
              success: 'Tarefa criada com sucesso!'
          });
          resetForm({});
      }).catch(function(err) {
          let error = 'Verifique sua conexão.';
          if(err.response && err.response.data) {
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
            <Principal title="Cadastrar Tarefa">
                <Container>
                    <DynamicForm
                        fields={this.fields}
                        title="Cadastrar Tarefa"
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