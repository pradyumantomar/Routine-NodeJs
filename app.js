const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

const tasks = require("./routes/routes");

const PORT = 3000;

//middleware
app.use(express.json());
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
      .then(() => console.log("SucessFull Database Connection 👾"))
      .catch((err) => {
        console.log("Error is here", err);
      });
    app.listen(PORT, console.log(`Server running on port ${PORT}.. 😎`));
  } catch (err) {
    console.log(`Something Happend on the Way .. Please debug it =>  ${err}`);
  }
};

// app.get("/hello", (req, res) => {
//   res.send("<h4>Hello<h4>");
// });

start();
