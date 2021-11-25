// external modules import
const express = require("express");
const router = express.Router();

// internal modules import
// const { getAllTasks, getSingleTask, createNewTask, updateTask, deleteTask } = require("./../controllers/tasksController");

const { createTask, getTask, getAllTasks, deleteTask, updateTask } = require("./../controllers/tasksControllerAsync");

// router.get("/", getAllTasks);
// router.get("/:id", getSingleTask);
// router.post("/", createNewTask);
// router.patch("/:id", updateTask);
// router.delete("/:id", deleteTask);
// router.route("/").get(getAllTasks).post(createNewTask);
// router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
