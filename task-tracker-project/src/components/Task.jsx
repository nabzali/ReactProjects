export default class Task {
    constructor(taskId, name, body, complete) {
        this.taskId = taskId;
        this.name = name;
        this.body = body;
        this.complete = complete;
    }
}