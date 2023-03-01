function tcsInterviewCheck(grdScore,hrcScore,sscScore,candidateName){
    var results=(grdScore>=70||hrcScore>=80||sscScore>90) // true|| false|| false-->
   ? `congrates ${candidateName} you are eligible for interview `
    :`unfortuntly you are not eligible for interview`;
    console.log(results);

} tcsInterviewCheck(80,86,90,"Komal");
tcsInterviewCheck(70,65,55,"Ankita");
tcsInterviewCheck(60,79,88,"Divya");
