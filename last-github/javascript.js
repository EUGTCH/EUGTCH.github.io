console.log("hello there friends")
alert("Hi! I am an alert box!!!");
function myFunction() {
  let person = prompt("Please enter your name", "your username");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}