const prompt=require('prompt-sync')();
//To collect user input in node env
const Grade=prompt('Enter the Grade?');

//Switch is used to execute one code from multiple expressions, similar to if else if. 
//but here we can use with numbers and charectores
switch(Grade){
    case 'A':
        console.log('Student graduated with st Rank with grade',Grade);
        break;
    case 'B':
        console.log('Student graduated with 2nd Rank with grade',Grade);
        break;
    case 'C':
        console.log('Student graduated with 3rd Rank with grade',Grade);
        break;
        
    default:
        console.log('Student is failed to met graduation requirements');

}