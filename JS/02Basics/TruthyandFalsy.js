//below are falsy values
//1.undefined
//2.null
//3. 0
//4. ''
//5.NaN

let user="";
if(user)
{
    console.log(user);
}

let user2="2";
if(2==user2){ // == its compares the values ignores the Types
    console.log("Its true");
}

if(2===user2) //=== its compares value and DataTypes
{ console.log("Its true");
}
else {
    console.log("Its not true")
}

let res="2"+2; //JavaScript assumes int as String
console.log(res); //res=22
console.log(typeof(res)); //String