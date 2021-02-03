var num1 = prompt("Enter tyhe firts number : ");
var num2 = prompt("Enter the second number : ");
var operation = prompt("Enter operation : ");

if (operation === "+"){
    alert(Number(num1) + Number(num2));
}else if(operation === "-"){
    alert(Number(num1) - Number(num2));
}else if(operation === "*"){
    alert(Number(num1) * Number(num2));
}else if(operation === "/"){
    alert(Number(num1) / Number(num2));
}else if(operation === "%"){
    alert(Number(num1) % Number(num2));
}
else {
    alert("Operation is invalid");
}

var course1 = prompt("Enter Marks of Course 1 : ");
var course2 = prompt("Enter Marks of Course 2 : ");
var course3 = prompt("Enter Marks of Course 3 : ");
var course4 = prompt("Enter Marks of Course 4 : ");
var course5 = prompt("Enter Marks of Course 5 : ");
var totalMarks = 500;
var total = Number(course1) + Number(course2) + Number(course3) + Number(course4) + Number(course5);
var perentage = (total / totalMarks) * 100;
alert(perentage);

