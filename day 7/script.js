//ES6 => ECMAScript6

var test = "austin";

console.log(window.test);

let name = "raja";

if(true){
    let name = "shanker";
    console.log("inside block" ,name);
}

console.log(name);


var name2 = "raja";
var name2;
if(true){
    var name2 = "shanker";
    var name2;
    console.log("inside block" ,name2);
}

console.log(name2);


var name1 = "test";

function changeName() {
    name1 = "Zen";
    name1 = "hello" + name1;
    return name1;
}
console.log(changeName());

console.log(name1);


function changeName1() {
    if(true){
        let test = "guru";
        test = "raj";
        console.log(test);
    }
}

changeName1();

function changeName2() {
    if(true){
        const test = "guru";
       // test = "raj"; // not reused to chande that test value
        console.log(test);
    }
}

changeName2();


//hoisting only var 
 test1 ="shanker";

 var test1;

 // spread 
 //object

 const obj1 = {name: "austin", age: 20};
 const obj2 = obj1;

 obj1.name= "raja";

 console.log(obj1.name);
 console.log(obj2.name);

 const obj3= {name: "austin", age: 20};
 const obj4 = {...obj1 , age:18};//Object.assign({}, obj3); // {...obj1 };

 obj3.name= "raja";
 
 console.log(obj3);
 console.log(obj4);

 //Spread Operater
 //array

 var arr1 = [1,3,3,4,5];
 var arr2 = [6,7,8];
 var arr3 = [...arr1, ...arr2];

 arr1[1] = 10;

 console.log(arr2);
 console.log(arr1);
 console.log(arr3);


 //Rest Parameter

 function sum(...ar){
   let sum =0;
   ar.forEach(a=>{
    sum += a;
   });
   return sum;
 }
 console.log(sum(10,20,59,67,87));




 var obj = new Object(); // old object structer


 //Destructuring
 //object

 var user = {
    name5 : "Guvi",
    age: 21,
    city: "chennai"
 }

 var { name5: uname , age: uage, city: ucity} = user;//Destructuring
// var uname = user.name5;
// var uage = user.age;
// var ucity = user.city;

console.log(uname ,uage ,ucity);

 //Destructuring
//array

var user6 =[
    [1,2,3],
    [4,5,6]
];
user6.forEach(([fEle,sEle])=>{
console.log(fEle, sEle);

})
//console.log(fEle, sEle);


const props = [
    { id: 1, name: "Fizz" },
    { id: 2, name: "Buzz" },
    { id: 3, name: "FizzBuzz" },
  ];

const num =props[0].name;
console.log(num);

 