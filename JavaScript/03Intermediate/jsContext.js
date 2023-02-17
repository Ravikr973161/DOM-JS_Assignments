

/* Context is always the value of the this keyword which is a reference to
the object that “owns” the currently executing code or the function where it's looked at. We know that window is a global 
object in the browser so if we type this in the console and it should return window object */

//Scope is determined by where a variable is declared. Context is the state of the current
// execution of code. It is accessed through the this pointer.

hello();

function hello(){
    console.log("Hi Good morning");
}

let myName="Ravi";

if(myName===window.myName){ //windows is browser specifix global context
    console.log("Its true in windows browser");
}

if(myName===this.myName){
    console.log("Its true");
}
