/*let phone = "+(995)-123 (4567)";

let r3=/(\d{3})-\d{3}\s(\d{4})/ig;
console.log(phone.match(r3))
*/
document.getElementById("register").onsubmit=function(){
    let inpu=document.getElementById("phone").value;
    let  exp=/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
   let res=exp.test(inpu);

   console.log(res);
    
    if(res=== false){
        return false
    }else{
        return true
}
}