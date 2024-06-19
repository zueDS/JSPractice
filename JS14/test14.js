document.forms.myForm
var myForm = document.forms.myForm

//onfocus event for border
myForm.name.onfocus = function(){
    myForm.name.style.border = "4px solid pink";
};

//blur event for border
myForm.name.onblur = function(){
    myForm.name.style.border = "none";
};