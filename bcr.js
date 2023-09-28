var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("p1", salt);
// Store hash in your password DB.

console.log("Salt: " + salt);
console.log("Hash: " + hash);

var hash = bcrypt.hashSync('bacon', 8);
console.log("Check 8: " + hash);