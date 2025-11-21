// array declaration
const customerNames=["Alice Johnson","Bob Smith","Charlie Brown"];
//adding a new name into thr array
customerNames.push("Diana Prince");
console.log(customerNames);

//updating an exixting name eg bob smith ti robert smitt
customerNames[1]="Robert smith";
console.log(customerNames);
//retreiving /finding out a specific name
console.log(customerNames[3]);
//removing a last name
customerNames.pop();
console.log(customerNames)
//use splice to remove multiple elements
customerNames.splice(2,1);
console.log(customerNames)