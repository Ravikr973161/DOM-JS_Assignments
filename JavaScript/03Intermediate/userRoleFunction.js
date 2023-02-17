/*
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

function getUserRole(name,role){

    switch (role) {
        case "admin":
            return `${role}-with all access`;
            break;
        case "subadmin":
            return `${role}- with access to create/delete courses`;
            break;
        case "testprep":
            return `${role}-with access to crete/delete tests`;
            break;
        case "user":
            return `${role}-consume all content`;
            break;

        default:
            return `${role}-trial user`;
            break;
    }
}

let getRole=getUserRole("Ravi","testprep");
console.log(getRole);

