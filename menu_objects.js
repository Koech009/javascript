let menuItems={};

//adding properties
menuItems.name="Margherita pizza";
menuItems.price=12.99;
menuItems.isAvailable=true;
console.log(menuItems);

//access properties
console.log(menuItems.price);
console.log(menuItems.name);
//modify properties
menuItems.price=14.99;
console.log(menuItems.price);

menuItems.isAvailable=false;
console.log(menuItems.isAvailable);
//remove property
delete menuItems.isAvailable;
console.log(menuItems);