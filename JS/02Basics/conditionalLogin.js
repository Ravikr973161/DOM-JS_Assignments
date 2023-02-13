
//Allow user to access the course if He is:
// loggoed via Googele
// logged via facebook
//logged via email

var email=true;
var facebook=false;
var Googele=false;

if(email || facebook || Googele){
    console.log("Login sucess");
}
else{
    console.log("Login failed");
}


//Allowing to purchase
//loggedIn, email Veried, CordInform valid
//if anything missing stop from purchase

let isLoggedIn=true;
let isVerified=true;
let cordInfo=true;

if(isLoggedIn && isVerified && cordInfo){
    console.log("He allowed to purchase");
}else{
    console.log("Not allowed to purchase")
}