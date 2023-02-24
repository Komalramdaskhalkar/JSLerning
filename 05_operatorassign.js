var value1="javaScript";
var value2="Google chrome";
var value3="Developer smart"
 function squareOfWordLength(value1){ 
    console.log (`The given string is : ${value1}`);
    console.log(`The given length of word is ${value1}: ${value1.length}`);
    console.log(`The square of the string is :${value1.length**2}`);
    console.log("==========================================");
    } 
     squareOfWordLength(value1);
     squareOfWordLength(value2);
      squareOfWordLength(value3);
function angularD(){
    var str = "I am Angular Developer";
    
    console.log(`The given string is"${str} " And  its length   is : ${str.length}`);
    var splitStr =str.split(" ");
    console.log(` The  total number of  words string is:${splitStr.length} `);
    var strDivision = str.length / splitStr.length  ;
    console.log(` The divide by total number of word is:${strDivision}`);
    var strDivision = str.length * splitStr.length  ;
    console.log(` The multiplicationof total number of word is:${strDivision}`);
}angularD()