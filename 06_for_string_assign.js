console.log("************************* step 1 *******************************");
function findingVowles(str){


    var count=0;
    for (let index =0; index< str.length; index++) {
        var char=str.charAt(index);
        if (char =="a"||char=="e"||char =="i"||char =="A"||char =="O"||char =="o"||char =="u"||char =="U"||char =="I")
          count=count+1;
       
        }  
       
              console.log( `The vowels present in given string "${str}" is:`,count)   
            
             
    }
    

findingVowles("Javascript is the language Of Internet");
findingVowles(" I am Angular Developer");
findingVowles("Hard work and commitment is the key of success");

console.log("************************* step 2 *******************************");
function lastWordCount( s ){
  var count = 0;
  
  
  for( let index = s.length -1 ; index >= 0; index--) {

        if   (s.charAt(index) == " ") { 
         
     break;
         }else
         {
         count++;
         }
        }
        console.log(`the  given string ${s} last word  count is:` ,count ) ;
        }
        lastWordCount("javascript  is the language Of  internet");
        lastWordCount(" I am Angular Developer");

lastWordCount("Hard work and commitment is the key of success");






