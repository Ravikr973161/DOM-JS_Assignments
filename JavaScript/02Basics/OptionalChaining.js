const Adventure={
    name: "Alice",
    dog: {
        name: "German Shephard"
    }
}

console.log(Adventure.name);
console.log(Adventure.dog.name);

console.log(Adventure.cat?.name); 
// we get "Undefind instead of error" cat object is not defined (?. handels the undefined object)