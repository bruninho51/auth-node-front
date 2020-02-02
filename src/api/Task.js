import Request from "./Request";

class Task {

    save = ({ name, score, minimumAge, description }) => {

        return Request.do('task', 'POST', {
            name: name,
            score: score,
            minimumAge: minimumAge,
            description: description
        });
    };
}

export default new Task();