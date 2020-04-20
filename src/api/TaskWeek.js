import Request from "./Request";

class TaskWeek {

    save = ({ tasks_id, dom, seg, ter, qua, qui, sex, sab }) => {
        return Request.do('task/week', 'POST', {
            tasks_id, dom, seg, ter, qua, qui, sex, sab
        });
    };

    getAll = () => {
        
        return Request.do('task/week', 'GET');
    }
}

export default new TaskWeek();