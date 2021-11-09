const Task = require("./../models/tasksModel");

// get all the tasks controller
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});

    try {
      res.status(200).json({ tasks });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get a single task controller
const getSingleTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    // const task = await Task.findById(req.params.id);
    const task = await Task.findOne({ _id: taskId });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    } else {
      res.status(200).json({ task });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create a new task controller
const createNewTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update a task controller
const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndUpdate(taskId, req.body, { new: true, runValidators: true });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    } else {
      // res.status(200).json({ msg: `Task with id: ${taskId} updated` });
      res.status(200).json({ task });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete a task controller
const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndDelete(taskId);

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    } else {
      // res.status(200).json({ msg: `Task with id: ${taskId} deleted` });
      // res.status(200).json({ task: null, status: "success" });
      res.status(200).json({ task });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createNewTask,
  updateTask,
  deleteTask,
};
