const mongoose = require("mongoose");

const db_instance = (url) => mongoose.connect(url);

module.exports = db_instance;
