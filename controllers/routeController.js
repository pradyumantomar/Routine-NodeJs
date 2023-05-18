const Task = require("../models/modelTask");

const getAllTasks = async (req, res) => {
  try {
    const taskData = await Task.find({});
    res.status(200).json({ taskData });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const taskData = await Task.create(req.body);
    res.status(201).json({ taskData });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const taskData = await Task.findOne({ _id: taskId });

    if (!taskData) {
      res.status(404).json({ msg: `No Task with this Id : ${taskId}` });
      return;
    }

    res.status(200).json({ taskData });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = (req, res) => {
  res.send("Update a single existing Task");
  console.log("Update a single Task");
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const taskData = await Task.findOneAndDelete({ _id: taskId });

    if (!taskData) {
      res.status(404).json({ msg: `No task with this id : ${taskId}` });
      return;
    }

    res.status(200).json({ taskData });
  } catch (error) {
    res.status.json({ error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
