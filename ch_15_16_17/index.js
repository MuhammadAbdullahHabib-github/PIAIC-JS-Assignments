var cources = [];
var course1 = prompt("Enter name of course 1 : ");
var course2 = prompt("Enter name of course 2 : ");
var course3 = prompt("Enter name of course 3 : ");
var course4 = prompt("Enter name of course 4 : ");
var course5 = prompt("Enter name of course 5 : ");

cources.push(course1);
cources.push(course2);
cources.push(course3);
cources.push(course4);
cources.push(course5);

alert(cources);

course1 = prompt('course1', cources[0]);
course2 = prompt('course2', cources[1]);
course3 = prompt('course3', cources[2]);
course4 = prompt('course4', cources[4]);
course5 = prompt('course5', cources[5]);

cources.splice(0,5,course1,course2,course3,course4,course5);

alert(cources);