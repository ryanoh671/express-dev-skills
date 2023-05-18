const skills = [
    {id: 1, skill: 'Front-End Developer', proficient: 'Completed Unit 1', jobReady: true},
    {id: 2, skill: 'Back-End Developer', proficient: 'Working on Unit 2', jobReady: false},
    {id: 3, skill: 'Full-Stack Developer', proficient: 'Hopefully soon', jobReady: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
	
  function getAll() {
    return skills;
  }


function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  // The Array.prototype.find iterator method is
  // ideal for finding an object within an array
  return skills.find(skill => skill.id === id);
}

function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  // New todos wouldn't be done :)
  skill.jobReady = false;
  skill.proficient = 'New';
  skills.push(skill);
}
	
function deleteOne(id) {
  // All properties attached to req.params are strings!
  id = parseInt(id);
  // Find the index based on the id of the todo object
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}