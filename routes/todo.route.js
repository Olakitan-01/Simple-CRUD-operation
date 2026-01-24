const express = require('express');
const router = express.Router();
const{syncExternalApi}=require('../controllers/todo.controller');


router.post('/syncExternalApi', syncExternalApi);

module.exports = router;