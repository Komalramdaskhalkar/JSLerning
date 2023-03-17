const arrayOfNames=[ "Anil", "sunil", "sita","gita","bill"];
const result =arrayOfNames.join(",")
arrayOfNames.join();
console.log(result);
console.log(typeof result);


console.log(" Resize an array");
console.log(arrayOfNames.length);

arrayOfNames.length=3;
console.log(arrayOfNames.length);
console.log(arrayOfNames);

arrayOfNames.length=7;
console.table(arrayOfNames);

const array=[3, 4, 6, 7, 2, 4, 3];
const setOfElements = new set();
 for( const  element of array){
    setOfElements.add(element);
}
console.log(setOfElements);