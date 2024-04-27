console.log("hello there friends")
alert("Hi! I am an alert box!!!");
function myFunction() {
  let person = prompt("Please enter your name", "your username");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
// Create an object:
const car = {type:"WolksVagen",
 model:"Jetta",
  color:"Red",
  isTurnedon: false,
  numberofwheels: 4,
  seats: [
  'seat1'
  ]
};
// Display some data from the object:
document.getElementById("demo").innerHTML = "The car type is " + car.type;
var jscool= document.getElementById('cool')
function clickonit(){
  jscool.classList.add('coolback')
}
