console.log("-------- check vote eligibility---------");
function voteEligibillity(age){
 if( age<=0 || age>120 || age==undefined|| age == null){
     return `Your ${age} age is invalid `
 }
    if (age>=18==true){
        return ` Your age : ${age} you are eligible for voting `
    }

 
         else{
            return `Your age ${age}  you are  not eligible for voting `
         }


        
}
 var result =voteEligibillity(45);
 console.log(result);
 var result =voteEligibillity(17);
 console.log(result);
 var result =voteEligibillity(8);
 console.log(result);
 var result =voteEligibillity(20);
 console.log(result);
 var result =voteEligibillity(-10);
 console.log(result);
 var result =voteEligibillity(200);
 console.log(result);
 var result =voteEligibillity(0);
 console.log(result);

 var result =voteEligibillity("undefined");
 console.log(result);
 var result =voteEligibillity("null");
 console.log(result)

console.log( "------- Grade  Calculation--------------");
function gradeCalculation(marks){
    
    if(marks<=0 || marks>100 || isNaN(marks) || (typeof marks!="number"))
    {
   console.log(`please provide valid marks: ${marks} `);}
    
    
    if(marks >= 90){
    console.log(`funstatic marks: ${marks} ,your grade is A+`);
    }
    
    if(marks >= 75 && marks< 90){
        console.log(`Excellent marks: ${marks} ,your grade is A`);
    }
        
        if(marks >=  50 && marks<75){
            console.log(`Good marks: ${marks} ,your grade is B`);}
            
if(marks >=  35 && marks< 50){
                console.log(`Good marks: ${marks} ,your grade is c, Need improvement`);}
                
            }
        

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);
