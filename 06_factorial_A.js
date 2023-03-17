function factorialOfNum(num){
  
  if(num>=0||num<=0|| num==undefined||num==null){
   
     console.log(`factorial ${num} is  invalid`)}
      else { 
        console.log(` factorial  is valid ${num }`);
      }
    let factorial=" 1";
    for (let index =1 ; index <= num; index++) {
    factorial= factorial * index ;
 
    }  factorial
    console.log(`factorial of  is ${num} is ${factorial}`)
  }
  

    
  


factorialOfNum(5);
factorialOfNum(3);
factorialOfNum("null");
factorialOfNum(9);
factorialOfNum("undefined");
factorialOfNum(8);
factorialOfNum(0)
