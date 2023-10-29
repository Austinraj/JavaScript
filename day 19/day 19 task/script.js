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
const Ele = document.documentElement;
function full() {
  Ele.requestFullscreen();

}
function exitfull() {
  document.exitFullscreen();
}

// 8.When user press any key in your html page show a alert that Invalid Key Pressed, but when user press spacebar show an alert Thank You..!! and close the current window.

// document.addEventListener("keydown", (event)=>{
//       if(event.key === ' '){
//         alert("Thank you..!");
//         window.close();
//       }else{
//         alert("Invalid key pressed")
//       }
// });

// 9.
const editableContent = document.getElementById("editableContent");

  // Add a click event listener to make the content editable
  editableContent.addEventListener("click", function() {
    this.contentEditable = true;
    this.classList.add("editable-active");
    this.focus();
  });




