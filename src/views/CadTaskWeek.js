import React from 'react';
import Principal from '../components/Principal';
import { withStyles } from '@material-ui/core/styles';
import { ErrorStackedbar, SuccessStackedbar } from '../components/Alert';
import WeekSelect from '../components/WeekSelect';
import DynamicForm from '../components/form/DynamicForm';
import validation from '../validations/task';
import { Container } from '@material-ui/core';
import Task from '../api/Task';

const styles = {
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto'
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
};

class CadTaskWeek extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isError: false,
            created: false,
            success: '',
            error: ''
        }
        this.fields = [
            {label: "Tarefas", type: "select", name: "tarefa", data: this.state.tasks},
            {type: "component", component: <WeekSelect label="Dias da Semana" />},
        ];
    }


    componentDidMount() {
        Task.getAll().then(res => {
            console.log(res.data.map(task => task.name));
            this.setState({ tasks: res.data.map(task => task.name) })
        });
    }

    render() {
        return (
            <Principal title="Cadastrar Tarefa Por Dia Da Semana">
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

export default withStyles(styles)(CadTaskWeek);