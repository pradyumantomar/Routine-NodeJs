const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const tasks = require("./routes/task");

const PORT = 3000;

//middleware
app.use(express.json());

const start = async () => {
  try {
    await connectDB;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}.. 😎`);
    });
  } catch (err) {
    console.log(`Something Happend on the Way .. Please debug it =>  ${err}`);
  }
};

app.get("/hello", (req, res) => {
  res.send("<h4>Hello<h4>");
});

app.use("/api/v1/tasks", tasks);

start();
