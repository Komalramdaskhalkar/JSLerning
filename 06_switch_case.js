var dayNumber=2;
function dayCheck(dayNumber) {
    if (dayNumber<=0 ||dayNumber>7|| dayNumber==null||isNaN(dayNumber));{
console.log(`Invalid dayNumber`);}
     if( dayNumber==1){
        console.log("mon");
     }
     if( dayNumber==2){
        console.log("tues");
     }
     if( dayNumber==3){
        console.log("wed");
     }
     if( dayNumber==4){
        console.log("thur");
     }
     if( dayNumber==5){
        console.log("fri");
     }
     if( dayNumber==6){
        console.log("sat");
     } 
     if( dayNumber==7){
        console.log("sun");
     }
}
dayCheck(null);
dayCheck(0);
dayCheck(-3);
dayCheck(9);
dayCheck(7);
dayCheck(5);
dayCheck(4);

function weekDay(day){
   switch (day){
      case 1:
    console.log(`Day of week is ${day}:Monday`);
    console.log("monday is the start of day of week");
   break;
   
      case 2:
    console.log(`Day of week is ${day}:tuesday`);
   break;
   case 3:
      console.log(`Day of week is ${day}:wenesday`);
     break;
     case 4:
      console.log(`Day of week is ${day}: thursday`);
     break;
     case 5:
      console.log(`Day of week is ${day}:friday`);
     break;
     case 6:
      console.log(`Day of week is ${day}:saturday`);
     break;
     case 7:
      console.log(`Day of week is ${day}:sunday`);
     break;
     

   default:
      console.log(`Invalid day:${day}`);
      break;

   }console.log(`end of switch case: ${day}`);
}weekDay(3);
weekDay(-2);
weekDay(100);
weekDay(5);
weekDay(7);
weekDay(6);