let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let r1=/\w+:\w+:\d{4}(.+)?/ig;
//or i can use \w* its the same 
console.log(ip.match(r1))