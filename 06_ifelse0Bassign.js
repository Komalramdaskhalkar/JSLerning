function checkEvenOdd(num){
    if (num%2==0){
        return "EVEN";

    }
    if (num%2!=0){
        return "ODD";
    }
}
var result=checkEvenOdd(45);
console.log(`Given number is 45: ${result}`);
var result=checkEvenOdd(70);
console.log(`Given number is 70: ${result}`); 
var result=checkEvenOdd(67);
console.log(`Given number is 67: ${result}`);
var result=checkEvenOdd(98);
console.log(`Given number is 98: ${result}`);
 console.log("-- chek if person is eligible for vote or not--");
 function ageForVote(age){
if (age>=18== true){
    console.log(`your age is: ${age}  you are eligible for voting`);
} else{
    console.log(`your age is:  ${age} you are not eligible for voting`);


}
}ageForVote(18);
 ageForVote(17);
  ageForVote(20);
  ageForVote(40);
  console.log("--------------------");
  function string(javaScriptES6){
    if (string>=10==true){
        console.log(`The given string${string} is contain more than 10 character`)}
        else{console.log(`The given string${string} is  not contain more than 10 character`)

        }
    }string(javaScriptES6)
  
