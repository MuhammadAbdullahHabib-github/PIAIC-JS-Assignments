var totalMarks = 500;
var course1 = prompt("Please enter your course 1 marks : ");
var course2 = prompt("Please enter your course 2 marks : ");
var course3 = prompt("Please enter your course 3 marks : ");
var course4 = prompt("Please enter your course 4 marks : ");
var course5 = prompt("Please enter your course 5 marks : ");

var obtainedMarks = Number(course1) + Number(course2) + Number(course3) + Number(course4) + Number(course5);
var percentage = (obtainedMarks / totalMarks) * 100;

switch (true) {
  case percentage >= 90 :
    alert("Grade A+");
    break;
  case percentage >= 75 :
    alert("Grade A");
    break;
  case percentage >= 60 :
    alert("Grade B");
    break;
  case percentage >= 45 :
    alert("Grade C");
    break;
  case percentage >= 30 :
    alert("Grade D");
    break;
  case percentage >= 0 :
    alertg("Grade F");
    break;
}
