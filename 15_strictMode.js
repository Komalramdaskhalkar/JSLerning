'use strict'
//myName="virat";// not allowed
 let myName ="virat";
console.log(myName);
//delete myName////not allowed

// person={//not allowed to define an object withot var ,let and const
    //firstName:" virat",
    //lastName:" kohli",
   // age :33
//}
const student={
    rollNo:34,
    age:17,
    city:"pune"
    
}
// delete student: // not allowed


function show(arg1,arg2=1){
    console.log(arg1,arg2);
    console.log(arg1 /arg2);

}show (100);
show (100,101);