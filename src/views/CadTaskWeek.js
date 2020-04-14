import React from 'react';
import Principal from '../components/Principal';
import { withStyles } from '@material-ui/core/styles';
import { ErrorStackedbar, SuccessStackedbar } from '../components/Alert';
import { Container, Box } from '@material-ui/core';
import CardWeek from '../components/CardWeek';
import TaskWeek from '../api/TaskWeek';

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
    }
};

class CadTaskWeek extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            selectedTasks: []
        };
    }

    componentDidMount() {
        TaskWeek.getAll().then(res => {
            this.setState({ tasks: res.data });
        });
    }

    handleClick = (day, id) => {
        this.setState((state, props) => {
            let { tasks } = state;
            const taskState = tasks.find(task => task.id === id);
            const idxTask = tasks.indexOf(taskState);
            tasks[idxTask].tasksWeeks[day] = !taskState.tasksWeeks[day];
            return { tasks };
        });
    }

    render() {

        return (
            <Principal title="Cadastrar Tarefa Por Dia Da Semana">
                <Container>
                    <Box m={2}>
                        {this.state.tasks.map(task => (
                            <CardWeek 
                                key={task.id} 
                                handleClick={this.handleClick}
                                {...task}
                            />
                        ))}
                    </Box>
                </Container>
                <ErrorStackedbar open={ this.state.isError } handleClose={ this.handleError }>
                    { this.state.error }
                </ErrorStackedbar>
                <SuccessStackedbar open={ this.state.created } handleClose={ this.handleSuccess }>
                    { this.state.success }
                </SuccessStackedbar>
            </Principal>
        );
    }
}

export default withStyles(styles)(CadTaskWeek);