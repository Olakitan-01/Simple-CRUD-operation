const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    userId: { type: Number, required: true },
    externalId: { type: Number, required: true }, // maps to API "id"
    title: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', todoSchema);