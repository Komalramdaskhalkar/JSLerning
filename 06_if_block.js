console.log(`start`);

var num=10;
if(num>0);{
    console.log(`inside if`);
    console.log(`Number is positive ${num}`)
}
console.log(`End`);
var ageForVote=20;
if (ageForVote>=18== true) ;{
        console.log("you are eligible for voting");
        console.log(`Age is: ${ageForVote}`)
}
console.log("End of next if block");

function checkEvenOdd(num){
    if (num%2==0){
        return "EVEN";

    }
    if (num%2!=0){
        return "ODD";
    }
}
var result=checkEvenOdd(45);
console.log(`Given number is: ${result}`);
var result=checkEvenOdd(70);
console.log(`Given number is: ${result}`); 
 var num1=5
if(num1>=5){
console.log(`Number ${num1} is positive`);
} else{
    console.log(`Number ${num1} is negative`);
}
function maleMarriageEligibillity( gender, age, boyName ){
if (gender=="Male" &&   age>=21){
    console.log(" you are eligible");
} else
{console.log(" you are  not eligible");

}
}
 maleMarriageEligibillity( "Male" , 25 , "Billgates");
 maleMarriageEligibillity( "Male" , 3 , "Anil");