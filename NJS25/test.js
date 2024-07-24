/* Everything that happens in the browser is an event and you can monitor any of those events by adding an EVENT LISTENER
and listening for them.
* Event listener can be append to any element inside the window and inside the DOM and you can trigger whatever
function you want either using an anonymous function inside the event listener or by using callback.  */


const container = document.querySelector(".container");
const button = document.querySelector(".cta-button");
const posX = document.querySelector(".posX span");
const posY = document.querySelector(".posY span");

// log when the button is clicked in the console
button.addEventListener("click", () => {
    button.classList.toggle("active");
    console.log("Button was clicked!");
}, false);

// update the X and Y display to show the current mouse position 
const mousePosition = (event) => {
    posX.innerText = event.pageX;
    posY.innerText = event.pageY;
    console.log(event);
};

window.addEventListener("mousemove", mousePosition, false);

// change the color of the box when mouse enters
container.addEventListener("mouseenter", () => {
    container.classList.add("blue");
}, false);

container.addEventListener("mouseleave", () => {
    container.classList.remove("blue");
},false);
