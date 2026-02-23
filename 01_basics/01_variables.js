const accountId = 1234567890;
let accountEmail = "developer@example.com";
var accountPassword = "12345";
accountCity = "New York"; 
let accountState;  //undefined because it is declared but not assigned a value

// accountId = 2//not allowed because accountId is a constant

accountEmail = "hcah.com";
accountPassword = "54321";
accountCity = "Los Angeles";

console.log(accountId);

/*
Prefer not to use var for variable declaration because of its function scope and hoisting behavior which can lead to unexpected results. Instead, use let for variables that may change and const for variables that should not be reassigned. 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

