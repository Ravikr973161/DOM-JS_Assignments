//Show user signOut bution, if he is authenticated
//Otherwise show him otion to login/SignUp

let authenticated=true;

if(authenticated){
    console.log("SignOut Button");
}else{
    console.log("SignIn Button");
}


//Using turnery operator

authenticated ? console.log("SignOut Button"):console.log("SignIn Button");