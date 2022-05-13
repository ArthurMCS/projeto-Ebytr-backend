const express = require('express');
const taskController = require('../controller/TaskController');

const router = express.Router();

router.get('/', taskController.getAll);
router.post('/', taskController.createTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
