const taskService = require('../service/TaskService');

const getAll = async (_req, res) => {
  try {
    const tasks = await taskService.getAll();
    return res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const createdTask = await taskService.add(req.body.task);
    return res.status(201).json(createdTask);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await taskService.exclude(Number(id));
    if (!task) return res.status(401).json({ message: 'Task not found' });
    return res.status(200).json(task);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  try {
    const taskUpdate = await taskService.update(Number(id), task);
    if (!taskUpdate) return res.status(401).json({ message: 'Task not found' });
    return res.status(201).json(taskUpdate);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};
