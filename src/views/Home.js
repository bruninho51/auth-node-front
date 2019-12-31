import React from 'react';
import Principal from '../components/Principal';
import Container from '@material-ui/core/Container';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Principal>
                <Container>
                    <h1>Testando 123</h1>
                </Container>
            </Principal>
        );
    }
}