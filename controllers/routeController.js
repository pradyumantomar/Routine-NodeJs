const Task = require("../models/modelTask");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
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
    res.status(500).json({ error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const taskData = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!taskData) {
      res.status(404).json({ msg: `No task with this id : ${taskId}` });
      return;
    }
  } catch (error) {}
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
