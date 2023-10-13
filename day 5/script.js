//NAmed function
function sum(a,b){
    return a+b;
}


//Anonymous Function
var diff = function(a, b){
    return a - b;
}

//Arrow Function - ES6

var product = (a = 2,b =4) =>{//defalt value is 2, 4
        return a *  b;
}

var quotient = (a , b) => a / b;

var print = () => console.log("Austin");
var print1 = _ => console.log("Austin");//prameter no need contion only used it this function

console.log(sum(10,20));// 30
console.log(diff(20, 10));// 10
console.log(product(20, 10));// undefined defalt values access pannum
console.log(quotient(20, 10));
print();
print1("raja"); //parameter ont used it defend

// Generator function -ES6

function * printof() {//step by step process
    console.log("yielding shanker");
    yield "Shanker";

    console.log("yielding raja");
    yield "raja";
}

var test = printof();
console.log(test.next().value);
console.log(test.next().value);

function * arithmetic(a , b) {//step by step process
    console.log("adding...");
    yield a + b;

    console.log("minus...");
    yield a - b;

    console.log("Multiplying...");
    yield a * b;

    console.log("dividing...");
    yield a / b;

}

var test1 = arithmetic(10, 20);
console.log(test1.next().value);
console.log(test1.next().value);
console.log(test1.next().value);
console.log(test1.next().value);


//IIF - immediately Invoked function
// first function () is def 
(function (){
    console.log("AUSTIN RAJA");
})();

(()=>{
    console.log("shanker");
})();// reuse not avable

(()=> console.log("test"))();//page load use paana use akthum like any error print in console

