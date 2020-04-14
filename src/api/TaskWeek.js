import Request from "./Request";

class TaskWeek {

    getAll = () => {
        
        return Request.do('task/week', 'GET');
    }
}

export default new TaskWeek();