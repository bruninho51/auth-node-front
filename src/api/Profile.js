import axios from 'axios';
import config from './../config';
import auth from './Auth';

axios.interceptors.response.use(response => response, error => {
    if(error.response.status === 401) {
        return auth.logout();
    }
    if(error.response && error.response.status === 422) {
        return Promise.reject(error);
    }
    return error;
});

class Profile {
    constructor() {
        this.save = this.save.bind(this);
    }

    save({nickname, dateOfBird, pwd, score}, CadProfile) {
        
        return axios({
            url: `${config.API.URL}/profile`,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': `Bearer ${localStorage.getItem(config.API.TOKEN_NAME)}`
            },
            data: {
                nickname: nickname,
                dateOfBird: dateOfBird,
                pwd: pwd,
                score: score
            }
        }).then(function(response) {
            CadProfile.setState({
                error: false,
                isError: false,
                created: true,
                success: 'Perfil criado com sucesso!'
            });
        }).catch(function(err) {
            let error = 'Erro desconhecido! Verifique sua conexão.';
            if(err.response.data) {
                error = err.response.data.message;
            }
            CadProfile.setState({ 
                error: error,
                isError: true,
                created: false
            });
            return Promise.reject();
        });
    }
}

export default new Profile;