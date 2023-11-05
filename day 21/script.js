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
