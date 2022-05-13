const taskModel = require('../models/TaskModel')

const getAll = async () => {
    const tasks = await taskModel.getAll();
    return tasks
};

const add = async (newTask) => {
    if(!newTask) return undefined; 
    const task = await taskModel.add(newTask)
    return task
};

const exclude = async (id) => {
    const task = await taskModel.exclude(id)
    return task
}

module.exports = {
    getAll,
    add,
    exclude
}