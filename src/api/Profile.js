import Request from "./Request";

class Profile {
    constructor() {
        this.save = this.save.bind(this);
    }

    save({nickname, dateOfBird, pwd, score}) {

        return Request.do('profile', 'POST', {
            nickname: nickname,
            dateOfBird: dateOfBird,
            pwd: pwd,
            score: score
        });
    }
}

export default new Profile();