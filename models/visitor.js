// Schema for visitor data
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
  name: String,
  phone: {type: String, required: true}
});

const Visitors = mongoose.model("visitor", visitorSchema);

module.exports = Visitors;