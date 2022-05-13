const taskModel = require('../models/TaskModel')

const getAll = async () => {
    try {
        const tasks = await taskModel.getAll();
    } catch (error) {
        return error
    }
};

const add = async (newTask) => {
    console.log(newTask);
   try {
        const task = await taskModel.add(newTask)
        return task
   } catch (error) {
       return error
   }
};

module.exports = {
    getAll,
    add,
}