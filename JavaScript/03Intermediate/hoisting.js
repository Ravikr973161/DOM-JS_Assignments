//Global Context: Which is collecting all information 
//everything within the context


//Execution Context: which comes when we are executing
// the code may be a line or function

/* 1.Variable Object
  2. Scope Chain
  3. this
  
  -Function declartions are scanned and made available
  -Variable declaritions are scanned and made undefined
  
  */

  tipper("6");

  function tipper(a){
  let bill= parseInt(a);
  console.log(bill+5);
  }

  // bigTipper(55); => it cannot be accessed before intialisation 
  // here bigTipper is Variable, Variable declaritions are scanned and made undefined 
  //it shuld be declared after the declartion as below
  let bigTipper = function (a){
    let bill=parseInt(a);
    console.log(bill+5);
  }

  bigTipper(55);

  
  let MyName="Ravi";

  function SayHello(){
    let MyName="Hitesh";
    console.log(MyName);

  }
  SayHello();
  console.log(MyName);



  /*
  Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors 
  and this happens during the 1st phase (memory creation phase) of the Execution Context.

Features of Hoisting:

1.In JavaScript, Hoisting is the default behavior of moving all the declarations at the top
 of the scope before code execution. Basically, it gives us an advantage that no matter where
  functions and variables are declared, they are moved to the top of their scope regardless of whether
   their scope is global or local. 
2.It allows us to call functions before even writing them in our code. 
Note: JavaScript only hoists declarations, not initializations. */