let student={
    firstName:"Ram",
    lastName:"deshmukh",
    isWorking:true,
    age:22,
    collageName:"qwe",
    id:1234456,
    city:"pune"
}
//let firstName = student.firstName;
// let isWorkingStd = student.isWorking;
// let ageStd = student.age;
 //let collageNameStd = student.collageName;
let { firstName,isWorking,age,collageName,id,city}=student;
 console.log(`Extractd values from object is firstName:${firstName} isWorking:${isWorking} age:${age} collageName :${collageName} city:${city}`);


 //Aarray Destructuring
 const array =[ 5,6,7,8];
 let [num1,num2,num3,num4,num5,num6] = array;
 console.log(num1,num2,num3,num4,num5);
