function outer(){
    console.log("This is outer function");
    let inner = function(){
        console.log("This is inner function");
        let innerFunVariable=100;
        console.log(innerFunVariable);
    }
return inner;

}//outer()();

const  innerFun =outer();
innerFun();