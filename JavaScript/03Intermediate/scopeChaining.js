//JavaScript engine uses scopes to find out the exact location or accessibility of variables and
// that particular process is known as Scope Chain.
let name1="Mr.Ravi";

console.log(`Line no 3:`,name1);
SayHello();

function SayHello(){
    let name1="Mr.Karthik";
    console.log(`Line no 7:`,name1);

    Hello();
    function Hello(){
        let name1="Mr.Rai";
        console.log(`Line no 12:`,name1); 
    }
}

/*There are three types of scopes available in JavaScript: Global Scope, 
Local / Function Scope, and Block Scope.

1.Variables or functions (or methods) which are declared under a global namespace
 (like area or location) are determined as Global Scope. 

 2.Variables that are declared inside a function or a method have Local or Function Scope.
 It means those variables or functions which are declared inside the function or a method can 
 be accessed within that function only.  
 
 3.Block Scope:
   Block Scope is related to the variables or functions which are declared using let and const 
since var does not have block scope.
Block Scope tells us that variables that are declared inside a block { }, 
can be accessed within that block only, not outside of that block.
 */

//Global scope
 let a=10;

 function price(){
    return a;
 }

 console.log(price());

 //locl or Function scope

 function Pay(){
    let bill=100;
 }
 console.log(bill); // Throws refrence error

// Block scope
{
    let x = 13;
}
// Throws a reference error 
// since x is declared inside a block which 
// cannot be used outside the block
console.log(x);
