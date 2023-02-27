console.log("******** step 1 ************")
function greaterNumber(){
   var num1="10";
   var num2="-10" 
   var num3="800"
   var num4="899"
   var greaterNumber = num1>num2 ? num1:num2;
   console.log(" The biggest number is:",greaterNumber );
   var greaterNumber = num3>num4 ? num3:num4;
   console.log(" The biggest number is:",greaterNumber );
   }greaterNumber() 
console.log("-----------step 2----------");
var num1="29";
var num2 ="44";
var num3="0";
var num4="101";
 function isEvenOrOdd(num1,num2,num3,num4){
    var result= (num1%2==0 )
    console.log( `The given number 29 is EVEN(TRUE)or ODD(FALSE):${result} `);
    var result= (num2%2==0 )
    console.log( `The given number 44 is EVEN(TRUE)or ODD(FALSE) :${result}`);
    var result= (num3%2==0 );;
    console.log( `The given number 0 is EVEN(TRUE)or ODD(FALSE):${result}`);
    var result= (num4%2==0 );
    console.log( `The given number is EVEN(TRUE)or ODD(FALSE): ${result}`);
 }isEvenOrOdd(num1,num2,num3,num4);
  var value1= "Javascript";
  var value2=  "developer";
  var value3=  "Google"; 
  console.log("-----------------------------------------------------")
  function WordLength(value1){ 
   var result= value1.length%2==0 ? "EVEN":"ODD";
   
   console.log( `The given wordlength is ${value1}: ${result}`);
   
   } 
   WordLength(value1);
    WordLength(value2);
   WordLength(value3);

 