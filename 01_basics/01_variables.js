const accoundId = 144553
let accountEmail = "abeer@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accoundId = 2 //not allowed


accountEmail = "ad@ad.com"
accountPassword = "2121212"
accountCity = "Lucknow"

console.log(accoundId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/



console.table([accoundId, accountEmail, accountPassword, accountCity, accountState])