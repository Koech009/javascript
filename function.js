// //unction defenition
// function addNumbers(num1,num2){
//     let sum=num1+num2;
//     console.log(sum)
// }
// //function call
// addNumbers(2,3);
// //we can call a function multiple times
// addNumbers(4,6);


// function addNumbers(num1,num2){
//     //function defn with parameters
//     let sum=num1 +num2;
//     return sum;//return the calculated sum
    
// }
//  let result=addNumbers(5,5);//function call with argument (5,5)

// console.log("the sum is:",result)

//function to calculate final price

// function calculateFinalPrice(originalprice, discount){
//     //check if didcount percentage is btw 0 and 100
//     if (discount <0 || discount >100){
//         console.error("invalid discount percentge.");
//         return;
//     }
//     //calculate the amount of discount
//     let discountAmount=originalPrice*(discount/100);
//     //calculate the final price by subtracting the discount
//     let finalPrice=originalprice- discountAmount;
//     return finalPrice;
// }

// //example usage
// let productPrice=1200;
// let discountPecentage=15;

// let finalPrice=calculateFinalPrice(productPrice.discountPecentage);
// console.log("Original Price:",productPrice);
// console.log("discount:",discountPecentage+"%");
// console.log("finalPrice:",finalPrice);

fname="ian";
lname="koech";
function displayName(fname, lname) {
    console.log("First name:", fname);

    console.log("Last name:", lname);

}
displayName(fname, lname); // Call the function
