'use strict';

//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//can be used to search through an array
const tasks = [
    {
      'name': 'Write for Envato Tuts+',
      'duration' : 120
    },
    {
      'name': 'Work out',
      'duration' : 60
    },
    {
      'name': 'Procrastinate on Duolingo',
      'duration' : 240
    }
  ];
const difficult_tasks = tasks.filter(task => task.duration >= 120);  
console.log(difficult_tasks);
//output is: [ { name: 'Write for Envato Tuts+', duration: 120 },  { name: 'Procrastinate on Duolingo', duration: 240 } ]

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
//output is: [ 'exuberant', 'destruction', 'present' ]

const players = [
    {
      'name': 'Tom Brady',
      'position' : 'QB'
    },
    {
      'name': 'Drew Brees',
      'position' : 'QB'
    },
    {
        'name': 'Carson Wentz',
        'position' : 'QB'
    },
    {
        'name': 'David Johnson',
        'position' : 'RB'
    },
    {
        'name': 'Todd Gurley',
        'position' : 'RB'
    },
    {
        'name': 'Julio Jones',
        'position' : 'WR'
    },
    {
        'name': 'Antonio Brown',
        'position' : 'WR'
    }
  ];
  console.log(players);

//  let qbsOnly = players.filter(p => p.position.toLowerCase() === 'qb');
//  console.log(qbsOnly);
/*
[ { name: 'Tom Brady', position: 'QB' },
  { name: 'Drew Brees', position: 'QB' },
  { name: 'Carson Wentz', position: 'QB' } ]
*/

const searchByPosition = (positionPrefix) =>{
    return players.filter(p => p.position.toLowerCase() === positionPrefix);
};

const searchByName = (_name) =>{
    return players.filter(p => p.name.toLowerCase().includes(_name.toLowerCase()) === true);
};

console.log(searchByPosition('rb'));
console.log(searchByName('Tom'));