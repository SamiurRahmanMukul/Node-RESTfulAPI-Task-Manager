// EXTERNAL LIBRARIES IMPORT
const express = require("express");
const router = express.Router();

// INTERNAL MODULES IMPORT
const { getAllTasks, getSingleTask, createNewTask, updateTask, deleteTask } = require("./../controllers/tasksController");

// router.get("/", getAllTasks);
// router.get("/:id", getSingleTask);
// router.post("/", createNewTask);
// router.patch("/:id", updateTask);
// router.delete("/:id", deleteTask);
router.route("/").get(getAllTasks).post(createNewTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
