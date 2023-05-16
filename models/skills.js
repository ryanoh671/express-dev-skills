const skills = [
    {skill: 'Front-End Developer', todo: 'Feed Dogs', done: true},
    {skill: 'Back-End Developer', todo: 'Learn Express', done: false},
    {skill: 'Full-Stack Developer', todo: 'Buy Milk', done: false}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return todos;
  }