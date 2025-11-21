const apple={
    type:"red delicius",
    color:"red",
    taste:"sweet"
};
//adding properties
apple.size="medium";//dot notation

apple["size"]="medium";//using bracket notation

console.log(apple);

//accessing properties
console.log(apple.color);

console.log(apple["color"]);

//modify properties
apple.color="green";

apple["color"]="green";


//remove properties
delete apple.taste;

delete apple["taste"]


