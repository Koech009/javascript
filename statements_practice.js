let temp=22;
let motionDetected=true;
let lightStatus;
let timeOfDay="afternoon";

if(temp>25){
    console.log("turning on the air conditiooner");
}
 
if (motionDetected){
    console.log("turning on thr lights");

}else {
    console.log("turning off the lights");
}
 
//else if

if (lightStatus===morning){

    lightStatus="off"
}else if(timeOfDay===afternoon){
    lightStatus="dim";
}else if(timeOfDay===evening){
    lightStatus="bright";
}else{
   lightStatus="off";
}

// Repetition Statements

// while loop
while (temperature > 20) {
  console.log(temperature);
  temperature--;
}

// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}