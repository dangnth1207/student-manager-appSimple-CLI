var readlineSync = require('readline-sync');
var fs = require('fs');
var students = [];

function showStudents() {
  students.sort();
  for (var student of students)
    console.log(student.name, student.age);
}

function createStudent() {
  var name = readlineSync.question('Name: ');
  var age = readlineSync.question('Age: ');
  //create 1 new object
  var student = {
    name: name,
    age: parseInt(age) //age string to int
  };
  students.push(student);// add student to array temporary
}

function saveAndExit() {
  var fileContent = JSON.stringify(students);
  fs.writeFileSync('./data.json', fileContent, { encoding: 'utf8' });
  console.log('make by dangnth with love');
}

function showMenu() {
  console.log('1. Show all students.');
  console.log('2. Add a new student.');
  console.log('3. Save & Exit.');
  //choose of cus
  var option = readlineSync.question('> ');

  //clean
  switch (option) {
    case '1':
      showStudents();
      showMenu();
      break;
    case '2':
      createStudent();
      showMenu();
      break;
    case '3':
      saveAndExit();
      break;
    default:
      console.log('Wrong option!');
      showMenu();
      break;
  }
}

function loadData() {
  var fileContent = fs.readFileSync('./data.json');
  //parse string of json to array
  students = JSON.parse(fileContent);
}

function main() {
  //Intro
  console.log('-WELCOME !-');
  //load data from file json
  loadData();
  //start app
  showMenu();
}

//
main();