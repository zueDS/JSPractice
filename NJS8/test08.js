
var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

var color = "skyblue";

//this function call heading color sets blue
//using let for avoid scope issue

function headingColor() {
    let color = "blue"; //for avoid that, declaring new variable using "let" inside the function.
    document.querySelector(".title").style.color = color;
  }
  /* the main point in here is, you can see, how is it possible to declare two variable in same name 
  which is color.(lineNo 7 & 13) the reason is let color currently working on inside the local scope of just
  this function and inside this function we can declare all new variable using let and they will only exist inside
  function and they all ignoring other things that are happening outside.*/
 
  headingColor(); //when it call here scope issue comes up.

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;


