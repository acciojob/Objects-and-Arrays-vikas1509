const players = ["John", "Bob", "Alice", "Poppy"];
const cap1 = players;
const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

let team =window.players;
let team1 = [];
for (let i = 0; i < players.length; i++) {
	team1[i].push(players.pop());
}
let cap1 ={
	name:person.name,
	age:person.age,
};
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
