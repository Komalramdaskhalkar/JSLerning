
console.log("-------------step 1----------------");

function stringHandsOn() { 
    var stringHandsOn = "Hey you are doing good, it keep up ";
     console.log(" Hey you are doing good, it keep up");
   
 
console.log("---------------step 2 -----------");
var resultstringHandsOn = stringHandsOn;
console.log("  The length of given string is;" ,resultstringHandsOn.length) ;
 var stringHandsOnlength=resultstringHandsOn.length;

 console.log("-------------step 3----------------");
    console.log("    Hey you are doing good, it keep up   " );
    var stringHandsOnTrim = "       Hey you are doing good, it keep up ";
    stringHandsOnAfterTrim = stringHandsOn.trim;
    console.log("removeing leading  and trailing exstra spaces using trim ()is:", stringHandsOnTrim.length);
   
    console.log("-----------step 4----------------------");
    console.log("Total number 0f  exstra spaces count:",resultstringHandsOn.length);
    
    console.log("-------------step 5--------------------");
    var stringHandsOnTrim = "Hey you are doing good, it keep up";
    var  charAtLastIndex  = stringHandsOnTrim.charAt (stringHandsOnTrim.length-1);
    console.log("The last character after trim is :",  charAtLastIndex );

    var  charAtfirstIndex  = stringHandsOnTrim.charAt(0);
    console.log("The first character after trim is :",  charAtfirstIndex );

    console.log("---------------step 6-----------------------");
    var stringHandsOnTrim = "Hey you are doing good, it keep up";
    var TotalWordsstringHandsOnTrim = stringHandsOnTrim.split(" ");
    console.log(" Total number of words are:",TotalWordsstringHandsOnTrim);

    console.log("---------------step 7----------------------");
    var stringHandsOnTrim = "Hey you are doing good, it keep up";
    console.log("index of good char:", stringHandsOnTrim.indexOf("good"));

    
    console.log("---------------step 8-----------------------");
    var stringHandsOnTrim = "Hey you are doing good, it keep up";
    var substring = stringHandsOnTrim.slice(22 ,stringHandsOnTrim.length);
    console.log(" substring starting from index 22:", substring);
 
     console.log("---------------step 9-----------------------");
      var stringHandsOnTrim =  "Hey you are doing good, it keep up";
     var string= stringHandsOnTrim.includes("Hey");
console.log(" string starts with word hey or not:",string );

console.log("---------------step 9-----------------------");
var stringHandsOnTrim = "Hey you are doing good, it keep up";
var string= stringHandsOnTrim.includes("up");
console.log(" string starts with word uo or not:",string);




     

    
}stringHandsOn()
    

    
    



