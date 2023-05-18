const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://pradyuman:N9yw30RG3U5SHas2@taskapp.pgngh2n.mongodb.net/?retryWrites=true&w=majority";

let db_instance = (url) => mongoose.connect(connectionString);

module.export = db_instance;
