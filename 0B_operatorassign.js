console.log("+++++++++++++++ step1 ++++++++++++++++++++");
function maleMarriageEligibillity( gender,age,boyName ){
    var result= ( gender,age>=21,boyName ) //true|| false||false-->
    ? `congrates hey ${boyName} you are eligible for marriage`:
    `elese not eligible for marriage`;
    console.log(result);
}femaleMarriageEligibillity("male",25,"Billgates");
maleMarriageEligibillity("male",17,"Stew Jobs");

console.log("+++++++++++++++ step1 ++++++++++++++++++++");
function femaleMarriageEligibillity( gender,age,girlName ){
    var result=(gender,age>=18,girlName) //true|| false||false-->
    ? `congrates ${girlName} you are eligible for marriage`:
    `elese not eligible for marriage`;
    console.log(result);
}femaleMarriageEligibillity("female",16,"Jenifer");
femaleMarriageEligibillity("female",27,"Maliinda Gates");