export default class Task {
    constructor(taskId, name, body, complete, priority, dueDate) {
        this.taskId = taskId;
        this.name = name;
        this.body = body;
        this.complete = complete;
        this.priority = priority;
        this.dueDate = dueDate;
    }

    get onTrack() {
        return new Date() < this.dueDate || this.complete;
    }

    get formattedDueDate() {
        const options = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        const formatted = new Intl.DateTimeFormat('en-US', options).format(this.dueDate);
        return formatted.replace(/,/g, '');
    }
}