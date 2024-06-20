var myForm = document.forms.myForm; //put myForm into variable 
var message = document.getElementById("message");

myForm.onsubmit = function(){ //used onsubmit for client side validation
    if(myForm.name.value == ""){
        message.innerHTML = "Please enter a name";
        return false; //adding returning value so then it will not submit the form till the error fixed
    }else{
        message.innerHTML = "";
        return true;
    }
}