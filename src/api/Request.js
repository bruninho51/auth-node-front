import axios from 'axios';
import config from './../config';
import auth from './Auth';

class Request {
    constructor() {
        axios.interceptors.response.use(response => response, error => {
            if(error.response.status === 401) {
                return auth.logout();
            }
            if(error.response && error.response.status === 422) {
                return Promise.reject(error);
            }
            return error;
        });
    }

    do(uri, method, data) {
        return axios({
            url: `${config.API.URL}/${uri}`,
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': `Bearer ${localStorage.getItem(config.API.TOKEN_NAME)}`
            },
            data: data
        });
    }
}

export default new Request;