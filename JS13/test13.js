//first thing store that massage ID in a variable
var myMessage = document.getElementById("message");
//creating the function which is going to fade in that message
function showMessage(){
    myMessage.className = "show";
}

setTimeout(showMessage, 3000)//3000 in here is milliseconds (3second)