// init studetns array

const student = [];

// fucntion to add students
function addStudent(name, grade) {
    student.push({ name, grade});
}

function removeStudent(name){
    const index = student.findIndex(student => student.name === name);
   if (index !== -1) {
       student.splice(index, 1);
       console.log("Student has been removed");
   }else{
       console.log("Student not found");
   }
}

// function for filtering students

function filterTopStudents(minGrade) {
    return student.filter(student => student.grade >= minGrade);
}

function formatStudentList(studentList) {
    return studentList.map(student => `${student.name} - "Grade: ${student.grade}"`).join("\n");
}

// start

console.log("students =", student);

addStudent("Bob", 80);
addStudent("Jeff", 88);
addStudent("Liam", 77);
addStudent("Keka", 90);
addStudent("Emma", 67);
addStudent("Alice", 55);

console.log("students =", student);


console.log("STUDENT LIST");
console.log(formatStudentList(student));

removeStudent("Alice");

console.log("Students List: ");
console.log(formatStudentList(student));

console.log("Students with grade equal-to or higher than 80:");
console.log(formatStudentList(filterTopStudents(80)));