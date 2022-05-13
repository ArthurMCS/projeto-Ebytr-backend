const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM tasks');
  return result;
};

const add = async (newTask) => {
  const [result] = await connection
    .execute(
      'INSERT INTO tasks (task) VALUES (?)',
      [newTask],
    );
  return { id: result.insertId, newTask };
};

const exclude = async (id) => {
  const tasks = await getAll();
  const deletedTask = tasks.find((task) => task.id === id);
  if (deletedTask) {
    const [result] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return result;
  }
  return undefined;
};

const update = async (id, task) => {
  const tasks = await getAll();
  const deletedTask = tasks.find((t) => t.id === id);
  if (!deletedTask) return undefined;
  const [result] = await connection
    .execute(
      'UPDATE tasks SET task = ? WHERE id = ?',
      [task, id],
    );
  return result;
};

module.exports = {
  getAll,
  add,
  exclude,
  update,
};
