import axios from 'axios';
import config from './../config';
import auth from './Auth';

axios.interceptors.response.use(response => response, error => {
    if(error.response && error.response.status === 401) {
        return auth.logout();
    }
    if(error.response && error.response.status === 422) {
        return Promise.reject(error);
    }
    return error;
});

class Task {

    save = ({ name, score, minimumAge, description }, CadTask) => {

        return axios({
            url: `${config.API.URL}/task`,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': `Bearer ${localStorage.getItem(config.API.TOKEN_NAME)}`
            },
            data: {
                name: name,
                score: score,
                minimumAge: minimumAge,
                description: description
            }
        }).then(function(response) {
            CadTask.setState({
                error: false,
                isError: false,
                created: true,
                success: 'Tarefa criada com sucesso!'
            });
        }).catch(function(err) {
            let error = 'Erro desconhecido! Verifique sua conexão.';
            if(err.response.data) {
                error = err.response.data.message;
            }
            CadTask.setState({
                error: error,
                isError: true,
                created: false
            });

            return Promise.reject();
        });
    };
}

export default new Task;