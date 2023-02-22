 
 var num1 = 100;
 var num2 = 200;

 function swapVariable(value1, value2) {
    
    console.log( "before swap:" ,value1, value2);
     var num1 = value1;
     value1=value2;
     value2= num1;
    console.log("After swap:" ,value1, value2);
 } swapVariable( num1, num2);
  