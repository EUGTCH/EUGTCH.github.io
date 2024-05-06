var timer = null
var cowntdownNumber = 10;
var changeState = function (state){
    document.body.className = 'body-state'+
    state;
    clearInterval(timer);
    cowntdownNumber = 10;
    document.getElementById('cowntdown').innerHTML = cowntdownNumber;

    // cowntdown
    if (state == 2) {
        timer = setInterval(function(){
            cowntdownNumber = cowntdownNumber-1;
            document.getElementById('cowntdown').innerHTML = cowntdownNumber;
            
            if (cowntdownNumber <=0) {
                changeState(3);
            }
        }, 500);
}else if (state == 3){
var success = setTimeout(function()
{
    var randomNumber = Math.round(Math.random()*10);
    console.log ('randomNumber:', randomNumber)
//success
if(randomNumber > 1){
    changeState(4);
}else {
    changeState(5); // oh no!
}
}, 2000);
};
}