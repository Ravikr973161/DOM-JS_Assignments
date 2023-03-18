let cuntrys=["India","USA","Russia","Neppal"];

let states= new Array("Bangalore","Rajasthan","Mumbai","Kerala");

console.log(states);
console.log(states.length);

states[1]="Punjab";
console.log(states);

states.pop() //removes the last element of the array
console.log(states);

states.unshift("Delhi");
states.unshift("Haryana"); //element inserted start of the array
console.log(states);

states.shift() //removes the first elemen of the array
console.log(states);

console.log(states.indexOf("Punjab")) 
//Returns the index of the first occurrence of a value in an array, or -1 if it is not present
