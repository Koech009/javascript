const employee = [];
employee.push("ian", "joy", "bruno", "matich", "koech");
console.log(employee);

console.log(employee[1]);

//update the name of the first employee
employee[0]="robert";
console.log(employee[0]);
//remove 2nd employee
employee.splice(1,1);
console.log(employee);
