// window 

// console
// document
// setTimeout
// web API -Application Programming Interface

// Call back function 
// it call Async

// event loop?
// GEC -Globle Exection context

// call Stack -read panni executed pannum
// event Loop -
// Callback Queue
// web API

// 1 H1 => 4000 => Red

// 2 H1 => 3000 => Green

// 3 H1 => 5000 => Blue


const first = document.getElementById("firstH1");
const second = document.getElementById("firstH2");
const thrid = document.getElementById("firstH3");

setTimeout(()=>{
  first.style.color = "red";
}, 4000);

setTimeout(()=>{
  second.style.color = "green";
}, 3000);
setTimeout(()=>{
  thrid.style.color = "blue";
}, 5000);


// callback hell problem

console.log("first");
document.getElementById("btn")
.addEventListener("click", function click(){
  console.log("clicked");
});


console.log("austin");

setTimeout(()=>{
  console.log("Guvi inside settimout")
},3000);

console.log("zen");

const arr = [1,2,3,4,5];
arr.map((a) => a*1);
console.log(arr);


function isEvenOrOdd(num){
  if(num % 2 === 0){
    return "even";
  }else{
    return "odd";

  }
}

// console.log(isEvenOrOdd(2));


// error first Callback
isEvenOrOdd(2 ,function(err,result){
 
});