const getAllTasks = (req, res) => {
  res.send("All tasks here");
  console.log("All Tasks is Here");
};

const createTask = (req, res) => {
  res.json(req.body);
  console.log("Post A Task");
};

const getTask = (req, res) => {
  res.json(req.params.id);
  console.log("Get  Single Tasks");
};

const updateTask = (req, res) => {
  res.send("Update a single existing Task");
  console.log("Update a single Task");
};

const deleteTask = (req, res) => {
  res.send("Deleting a Task");
  console.log("Delete a Task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
