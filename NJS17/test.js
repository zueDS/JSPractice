
// Define a default volume for the window (the entire DOM):
window.volume = 20;

// standard object named greenPack which is inside the method
const greenPack = {
    name: "Yonex",
    color: "green",
    volume: 8,
    pocketNum: 3,
    newVolume: function(volume){
        console.log("this.volume in the method:", this.volume);
        this.volume = volume;
        console.log("this.volume after the update:", this.volume);

        // Added an immediately invoked function expression which is an anonymous function.
        /* This function hoisted with global scope. when the function declaration that function declaration hoisted with
        global scope. */
        (function () {
        console.log("this.volume in nested function:", this.volume);
         })();
        
         /* In here arrow function stays with the current scope. this happening because 
         an arrow function does not have its own 'this.' and it will refer to 
         closest available scope which is in this case is the object. */
         (() => {
            console.log("this.volume in nested function:", this.volume);
             })();
    },
};

console.log(greenPack.newVolume(5));