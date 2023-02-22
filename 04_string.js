var greet="Good Morning";
console.log(typeof greet);

console.log("Total number chaes available into this string variable-greet");
var greetLength = greet.length;
console.log( "Total length of string is:" ,greetLength);

console.log("find the character by index value");
var charAtIndex3 =greet. charAt(3);
console.log("character avaliable at index 3 is:",charAtIndex3);

console.log("find the last character");
 var charAtLastIndex = greet.charAt(greetLength-1);
 console.log("Last char is:",charAtLastIndex);

 console.log("Find the index by character value ");
 var indexOfM= greet.indexOf('M');
 console.log("Index of char M is:", indexOfM );

 console.log(" Index of char which is not available into string: ", greet.indexOf("2"));

 console.log("index of o char:", greet.indexOf("o"));
 console.log(" Index of o chars using lastIndexOf:", greet.lastIndexOf("O"));
  
 var replaceResult = greet.replace( "Morning", "Evening" );
  console.log(replaceResult);
  console.log(greet);

  console.log("Upper case:",replaceResult.toUpperCase());
  console.log(" Lower case:",replaceResult.toLowerCase());

  var myName = "     komal khalkar  ";
myNameAfterTrim = myName.trim();
console.log("removeing exstr start and end space using trim():", myName.length,myNameAfterTrim.length);

var count =myName.length - myNameAfterTrim.length;
console.log(count);

console.log( myName.trimStart(),myName.trimEnd());

console.log('includes()');
console.log("Is substring  Mor includes in greet or not:" ,greet.includes("Mor"));
console.log("Is substring  Afternoon includes in greet or not:" ,greet.includes("Afternoon"));

console.log("slice() method");
var sliceResult = greet.slice(5 , 12);
console.log(sliceResult);
console.log(greet.slice(2,5)); 

console.log("split() method ");
var greet = "Good Morning";
var splitResult = greet.split (" ");
console.log(splitResult);
console.log("total word: ",splitResult.length);

var myFriendList = "billgates, stew job ,elon musk, Ratan Tata, sunder pichai, Satya Nadella, Narayn murti, Nandan Nilekani,larry page,surgy brain, Tin Cook";
var frdList = myFriendList.split(",");
console.log(frdList);
console.log(frdList.length);


