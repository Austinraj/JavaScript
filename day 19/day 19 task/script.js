//  1.
// function mouse(evt){
//    const divEle1 = document.getElementById("div1");

//     divEle1.style.color = "red";
//     // document.querySelector("div").evt.target.
// }

// // const divEle = document.getElementById("div1");

// // divEle.style.color = "red";

// const divEle = document.getElementById("div1");

// divEle.onmouseover =mouse;

// divEle.onmouseleave = (evt) =>{
//     evt.target.style = "color: black";
// }


// 2.

// const name1 = prompt("enter your name");
// document.getElementById("value").innerText = name1;


// 3.

// function Handclick(evt){
//     const x =evt.clientX;
//     const y =evt.clientY;

//     document.getElementById("coordinates").innerHTML = `${x} <br> ${y}`;
// }

// 4.

// function inp(evt){
//     const count = evt.target.value.length;
//     document.getElementById("count1").innerHTML = count;

// }

// 5.

const number = 54.6;
console.log(number);
console.log(number.toString(2));
console.log(number.toString(16));

// 6. 

function validation(evt) {
    evt.target.value = evt.target.value.substr(0, 6)
}

// 7.In your HTML Add two buttons, where first button action for full screen mode and the second button for exit from full screen mode.
const Ele =document.getElementById("on");
function full(evt){
  if(evt){
    Ele.requestFullscreen();
  }
    
}
const Ela = document.getElementById("of");
Ela.exitFullScreen();

