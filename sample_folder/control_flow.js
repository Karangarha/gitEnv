let userRole = "admin";
let accessLevel;

if(userRole === "admin"){
    accessLevel = "Full access granted";
}
else if (userRole === "manager"){
    accessLevel = "Limited access granted";
}
else{
    accessLevel = "No access granted";
}

console.log("Access Level: " + accessLevel);

let isLoggedIn = true;
let userMassage;

if(isLoggedIn){
    if(userRole === "admin"){
        userMassage = "Welcome, Admin!";
    } else {
        userMassage = "Welcome, User!";
    }
} else{
    userMassage = "Please log in to access the system."
}

console.log("User Message: " + userMassage)

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);