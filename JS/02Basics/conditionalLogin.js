
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
