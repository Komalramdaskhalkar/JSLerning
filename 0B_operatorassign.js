console.log("+++++++++++++++ step1 ++++++++++++++++++++");
function maleMarriageEligibillity( gender, age, boyName ){
    var result= (gender && age>=21) ?`congrates hey ${boyName} you are eligible for marriage`:
    ` ${boyName} not eligible for marriage`;
    return result;
}
    
 var result= maleMarriageEligibillity("male",25,"Billgates");
 console.log(result);
 var result=maleMarriageEligibillity("male",17,"Stew Jobs");
console.log(result);


console.log("+++++++++++++++ step2 ++++++++++++++++++++");
function femaleMarriageEligibillity( gender,age,girlName ){
    var result=(gender, age>=18)
    ? `congrates ${girlName} you are eligible for marriage`:
    `${girlName} not eligible for marriage`;
    return result;
    
} var result= femaleMarriageEligibillity("female",16,"Jenifer");  

console.log(result);                                                                                                                                      
var result= femaleMarriageEligibillity("female",27,"Maliinda Gates");

console.log(result);