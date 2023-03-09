function check_leap_year(year){
    if (year==isNaN(year)||year==undefined|| year== null) {
        return `the  ${year} year is invalid please provide valid year`}
      if   (year%4==0 &&year%100!=0||year%400==0){
      return (`The given year ${year} is leap year`);

    }else 
    return (`The given  year ${year} is not leap year`);

    
}
var result =check_leap_year(2020);
console.log(result);
var result=check_leap_year(1999);
console.log(result);
var result= check_leap_year(2022);
console.log(result);
var result= check_leap_year(null);
console.log(result);

var result=check_leap_year("Twenty Twenty");
console.log(result);
var result=check_leap_year(undefined);
console.log(result);
var result=check_leap_year(NaN);
console.log(result);
var result=check_leap_year(1750);
console.log(result);