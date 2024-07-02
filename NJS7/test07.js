
var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

var color = "skyblue";

//this function call heading color sets blue
function headingColor() {
    color = "blue";
    document.querySelector(".title").style.color = color;
  }
 


document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

headingColor(); 
