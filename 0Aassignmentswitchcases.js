function  monthOfYear(month) {
    
    switch (month){
       
        case 1:
            console.log(`month of year is ${month}:January`);
            break; 
            case 2:
                console.log(`month of year is ${month}:Febuary`);
                break;  
                case 3:
                console.log(`month of year is ${month}:March`);
                break; 
                case 4:
    console.log(`month of year is ${month}:April`);
    break; 
    case 5:
        console.log(`month of year is ${month}:May`);
        break; 
        case 6:
            console.log(`month of year is ${month}:June`);
            break; 
            case 7:
                console.log(`month of year is ${month}:July`);
                break; 
                case 8:
                    console.log(`month of year is ${month}:August`);
        break; 
        case 9:
            console.log(`month of year is ${month}:September`);
            break; 
            case 10:
                console.log(`month of year is ${month}:October`);
                break;
                case 11:
                    console.log(`month of year is ${month}:November`);
                    break;
                    case 12:
                console.log(`month of year is ${month}: December`);
                break;
                default:
      console.log(`Invalid month :${month}`);
                         
    }
    
}monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);

