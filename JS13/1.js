//How we stopped a timer
var colorChange = document.getElementById("color-changer");
var colors = ["red","blue","green","pink"];
var counter = 0;

function changeColor(){
    if(counter >= colors.length){
        counter = 0;
    }
}

function changeColor(){
    colorChange.style.background = colors[counter];
    counter++;
}

var myTimer = setInterval(changeColor, 3000);

colorChange.onclick = function(){
    clearInterval(myTimer);
    colorChange.innerHTML = "Timer has stopped";
};