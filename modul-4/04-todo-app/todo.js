const fs = require("fs");
const { v4: uuid } = require("uuid");

class Todo {
    constructor(task) {
        this.task = task;
        this.status = "Doing";
        this.id = uuid();
    }
}

class Todos {
    readAll() {
        if (!fs.existsSync("data.json")) {
            fs.writeFileSync("data.json", JSON.stringify([]));
        }
        const content = fs.readFileSync("data.json", "utf-8");
        return JSON.parse(content);
    }

    addTodo(todo) {
        const todos = this.readAll();
        todos.push(todo);
        this.updateAll(todos);
    }

    complete(id) {
        const todos = this.readAll();
        for (const todo of todos) {
            if (todo.id === id) {
                todo.status = "Done";
                break;
            }
        }
        this.updateAll(todos);
    }

    delete(id) {
        const todos = this.readAll();
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        this.updateAll(updatedTodos);
    }

    updateAll(todos) {
        fs.writeFileSync("data.json", JSON.stringify(todos, null, 2));
    }
}

const todos = new Todos();

const newTask = new Todo("Clean the house");
todos.addTodo(newTask);
console.log("Task added successfully!");

todos.complete(newTask.id);
console.log("Task marked as complete!");

todos.delete(newTask.id);
console.log("Task deleted successfully!");

const allTasks = todos.readAll();
console.log("Listing all tasks:");
console.log(allTasks);
