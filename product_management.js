//declaring object
let product={};
//adding properties  using dot notation and bracket notation
product.name="wireless mouse";
product["price"]=288.99;
product.stock=100;
//accessing properties
console.log(product.name);
console.log(product["price"]);
//modify properties
product.name="battery";
product["stock"]=40;
console.log(product);
//remove properties
delete product.stock;
console.log(product);