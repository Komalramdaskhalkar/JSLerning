console.log("********* Arrow function with no argument and no return value ***********");
let show =  () => { 
    console.log("Good Morning, Today is Monday");
}
show();
console.log("********* Arrow function with no argument and no return value ***********");
let multiply =(num1,num2,num3) => {
    const result =num1 * num2 * num3;
    return result
  }
  const multiplyResult= multiply(5,5,2);
  console.log(`The multiplication of 5,5,2 is ${multiplyResult}`);
  const Result= multiply(10,4,1);
  console.log(`The multiplication of 10,4 is ${Result}`);
  console.log("********* Arrow function with five argument and  return value ***********");
  let add = ( num1,num2,num3,num4,num5) => {
    const result =num1 + num2  + num3 + num4 +  num5;
      return  result
} 
const addResult=add(100,100,200,349,756);
console.log(`Addition of 100,100,200,349,756 is ${addResult}`);

