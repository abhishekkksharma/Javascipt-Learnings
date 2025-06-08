const account_Id = 144553  // can not be changed (always constant)
let account_email = "abhishek@gmail.com" // 
var account_Password = "1234"  // rarely used
accountcity = "chandigargh" // not to use (also variable)
let accountstate 

/*
Prefer not to use var 
because of issue in block scope and funsctional scope
*/

// account_Id = 2
account_email = "ajhh@gmail.com"
accountcity= "Banglore"

console.log(account_Id)
console.table([account_Id, account_email,accountcity,accountstate])