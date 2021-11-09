const getAllTasks = (req, res) => {
  res.send("GET ALL THE TASKS");
};

// get a single task controller
const getSingleTask = (req, res) => {
  res.json({ id: req.params.id });
};

// create a new task controller
const createNewTask = (req, res) => {
  res.json(req.body);
};

const updateTask = (req, res) => {
  res.send("UPDATE TASK");
};

const deleteTask = (req, res) => {
  res.send("DELETE TASK");
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createNewTask,
  updateTask,
  deleteTask,
};
