import React from 'react';
import Principal from '../components/Principal';
import Container from '@material-ui/core/Container';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Principal title="Cadastro de Tarefas">
                <Container>
                    <h1>Home</h1>
                </Container>
            </Principal>
        );
    }
}