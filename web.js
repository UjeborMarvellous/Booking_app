 //1
 function caseInDay(val) {
  var day = "";
  switch (val) {
    case 1:
      console.log(Monday);
      break;
    case 2:
      console.log(Tuesday);
      break;
    case 3:
      console.log(Wednessday);
      break;
    case 4:
      console.log(Thursday);
      break;
    case 5:
      console.log(Friday);
      break;
    case 6:
      console.log(Sarturday);
      break;
    case 8:
      console.log(Sunday);
      break;

    default:
      console.log(default_statement);
  }
}
caseInDay(1);

//2
function createStudent(firstName,secondName,thirdName) {
    return  firstName + secondName + thirdName
 }
 var x = createStudent("Hello," , " World! "," welcome"); // Hello, World!
 document.write(x);

 //3
 function createStudent(){

    var x = ["anita ","david ","above","sent"]
    var student = x;
    document.write(student)
    }
    
    
    createStudent()
