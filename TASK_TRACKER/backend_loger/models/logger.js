const mongoose = require("mongoose");

const loggerSchema = new mongoose.Schema({
  email: { type: String },
  name: { type: String, },
  todo: { type: String, },
  comments: { type: String, },
  created_at : { type: Date, default: Date.now }
});
const LoggerModel = mongoose.model("Logger", loggerSchema);

module.exports = LoggerModel;
