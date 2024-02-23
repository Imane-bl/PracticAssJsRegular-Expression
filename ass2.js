let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let r2=/\bos\d*o\b/ig;
//or i can use \w* its the same 
console.log(specialNames.match(r2))
// Output
// ['Os10O', 'OsO', 'Os100O']