

// All actual paths start with "/skills"
  // routes/todos.js

  var express = require('express');
  var router = express.Router();

  // Require the controller that exports To-Do CRUD functions
  var skillsCtrl = require('../controllers/skills');

  // All actual paths begin with "/todos"

  // GET /skills
  router.get('/', skillsCtrl.index);
  
  // GET /todos/new <- Define BEFORE show route
  router.get('/new', skillsCtrl.new);

  // GET /todos/:id
  router.get('/:id', skillsCtrl.show);

  // POST /skills
  router.post('/', skillsCtrl.create); // add this route
   
  // new route below
  router.delete('/:id', skillsCtrl.delete);

module.exports = router;
