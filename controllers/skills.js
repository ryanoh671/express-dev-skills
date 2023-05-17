// controllers/skills.js

// Convention is to name the model in uppercase and singular
const Skill = require('../models/skill');

module.exports = {
    index,
    show
    };

    // res render is always gonna look in your views folder.
    // the second object is what you want to pass. 
function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

    
  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      // title: 'Skill Details'
    });
  }