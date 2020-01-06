import isInt from 'validator/es/lib/isInt';
import isEmpty from 'validator/es/lib/isEmpty';
import toDate from 'validator/es/lib/toDate';

function validate(values) {

    let error = '';

    let nickname = values.nickname;
    let dateOfBird = values.dateOfBird;
    let confirmPwd = values.confirmPwd;
    let score = values.score;
    let pwd = values.pwd;

    error = (!error && pwd != confirmPwd) ? 'invalid password confirmation' : '';
    error = (!error && isEmpty(nickname)) ? 'nickname is required' : '';
    error = (!error && isEmpty(dateOfBird)) ? 'dateOfBird is required' : '';
    error = (!error && isEmpty(score)) ? 'score is required' : '';
    error = (!error && isEmpty(pwd)) ? 'pwd is required' : '';
    error = (!error && isEmpty(score)) ? 'score is required' : '';

    error = (!error && !isInt(score)) ? 'score must be integer value': '';
    error = (!error && !toDate(dateOfBird)) ? 'dateOfBird must be integer value' : '';

    return error;
}

export default validate;