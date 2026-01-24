const express = require('express');
const axios = require('axios');
const Todo = require('../models/todo.model');

const router = express.Router();

// Fetch external API and save to DB
const syncExternalApi = async (req, res) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    var completedStatus = "";
    if (data.userId == 1) {
        completedStatus = true;
    }

    const todo = await Todo.create({
      userId: data.userId,
      externalId: data.id,
      title: data.title,
      completed: completedStatus,
    });

    res.status(201).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch and save todo', error: error.message });
  }
};

module.exports = {
  syncExternalApi,
};