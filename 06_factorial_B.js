function factorialOfWords(str){
    if ( str==null || str==undefined || (isNaN(str) && typeof str=="number")){
  console.log(`given string ${str} is invalid`);}
    else{
      console.log(` given string is valid ${ str}`);
      let words  = str.split(" ");
      const totalWords  = words.length -1;
      console.log("totalWords");
       let factorial="1" ;
      for( let index= totalWords ; index >= 1;index--)
        factorial = index * factorial;
      
    }
        console.log(`factorial of "${str}" is `,factorial);
        return `factorial of ${str} is ${factorial}`;
        
      }
    factorialOfWords("Revisioin is the mother of success");
factorialOfWords("We never fail ,we always learn");
factorialOfWord(null);
factorialOfWord(" ");
factorialOfWord(' komal Ramdas Khalkar');
factorialOfWord("undefined")
  