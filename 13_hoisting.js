


console.log(myName);//allowed  to acess
//console.log(age)//not allowed to acess
var myName="virat kohli";
let age=33;
show();// allowed as  normal function are  hosted
function show(){

    console.log("show() function")
}
//greet ();not allowed as FE and FE does not hosted
    var greet= function(){
    console.log("good morning");
}
greet();

function getPrimNumber(num){
    //array of prime number till num starting from 2
} const arrayNums =getPrimNumber(50);
getPrimNumber(33);