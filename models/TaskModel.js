const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM tasks');
  return result;
};

const add = async (newTask) => {
    try {
      const [result] = await connection
      .execute(
      'INSERT INTO tasks (task) VALUES (?)',
      [newTask],
      );
      return { id: result.insertId, newTask };
    } catch (error) {
      console.error(error);
    }
  };
  

module.exports = {
    getAll,
    add
}