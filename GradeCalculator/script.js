let english = Number(prompt("Enter the mark of English:"));
let malayalam = Number(prompt("Enter the mark of Malayalam:"));
let maths = Number(prompt("Enter the mark of Maths:"));
let basicscience = Number(prompt("Enter the mark of Basic Science:"));
let socialscience = Number(prompt("Enter the mark of Social Science:"));

let totalmark = english + malayalam + maths + basicscience + socialscience;
let average = totalmark / 5;


let grade;
if (average >= 90) {
    grade = "A+";
} else if (average >= 80) {
    grade = "A";
} else if (average >= 70) {
    grade = "B";
} else if (average >= 60) {
    grade = "C";
} else if (average >= 50) {
    grade = "D";
} else {
    grade = "F";
}


alert("Total Mark: " + totalmark +
    "\nAverage: " + average +
    "\nGrade: " + grade);