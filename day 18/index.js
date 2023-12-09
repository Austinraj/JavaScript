function clickMe(evt){
    // evt.target.inneText = "Clicked";
    console.log(evt);
    console.log("clicked !!");
}

const btn = document.getElementById("btn");
// btn.onclick = clickMe;->  two same
btn.addEventListener("click", clickMe);

//  cerate clickme address same address remove pannanum
btn.removeEventListener("click", clickMe);

function onmouseov(){
    console.log("div mouse over");
}

const btnEl = document.getElementById("test");
btnEl.onmouseover = onmouseov;

function eve(evt){
    document.getElementById("input").innerText  =evt.target.value.length;
}


// btn.name = "austin"  ->same
// btn.setAttribute("name", "raja");



// function -> 
// function with event
// inline action definition
// inline action with this

// inline -> onclick
// btn.onclick ->
// btn.addEventListener()


//Alert - Message
function alertuser(){
    alert("welcom to");
}

//prompt - Input 
function promptUesr(){
    const name = prompt("enter your name");
    if(name){
        alert(`typed name is ${name}`);
    }


}


// confirm - yes or no
function confirmUser(){
    const yes = confirm("Do yuo want to contiue ?");
     if (yes){
        console.log("ok");
     }
     else{
        console.log("no");
     }
}

function google(){
location.href = "https://google.com";
}

// location.href
// location
// resize
//  innerHeight
// innerWidth
// outerHeight ->out side broweser
// outerWidth -> 
// location.reload
