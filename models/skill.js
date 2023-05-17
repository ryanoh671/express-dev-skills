const skills = [
    {id: 125223, skill: 'Front-End Developer', done: true},
    {id: 127904, skill: 'Back-End Developer', done: false},
    {id: 139608, skill: 'Full-Stack Developer', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
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