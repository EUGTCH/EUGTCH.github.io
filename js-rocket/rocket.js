var timer = null
var cowntdownNumber = 10;
var changeState = function (state){
    document.body.className = 'body-state'+
    state;
    clearInterval(timer);
    if (state == 2) {
        timer = setInterval(function(){
            document.getElementsById('cowntdown').innerHTML = cowntdownNumber;
            cowntdownNumber = cowntdownNumber-1;
            if (cowntdownNumber <=) {
                changeState(3);
            }
        }, 500);
}else if (state == 3){

};
}