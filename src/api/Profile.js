import axios from 'axios';
import config from './../config';

class Profile {
    constructor() {
        this.save = this.save.bind(this);
    }

    save(values) {
        if(!error) {
            axios({
                url: `${config.API.URL}/profile`,
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data: {
                    nickname: values.nickname,
                    dateOfBird: values.dateOfBird,
                    pwd: values.pwd,
                    score: values.score
                }
            }).then(function(response) {
                
            }).catch(function(err) {

            });
        }else {
            return error;
        }
    }
}

export default new Profile;